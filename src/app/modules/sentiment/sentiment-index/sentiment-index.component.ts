import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { StockQuote } from '../../stocks/models/stocks-quote.interface';
import { SentimentInsider } from '../models/sentiment.model';
import { SentimentService } from '../services/sentiment.service';



class StockInputs {
  companyName: string = '';
  symbol: string = ''
}

@Component({
  selector: 'app-sentiment-index',
  templateUrl: './sentiment-index.component.html',
  styleUrls: ['./sentiment-index.component.css']
})
export class SentimentIndexComponent implements OnInit {
  sentiments: SentimentInsider[] = [];
  StockInputs: StockInputs;
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private ref: ChangeDetectorRef, private toastr: ToastrService, private sentimentService: SentimentService, private datepice: DatePipe) {
    this.StockInputs = { companyName: '', symbol: '' };
  }

  ngOnInit(): void {
    this.StockInputs = (this.route.snapshot.params) as StockInputs;
    this.getInsiderSentimentFromApi(this.StockInputs.symbol)
  }

  async getInsiderSentimentFromApi(stockSymbols: string) {
    let dateFrom = this.datepice.transform(new Date(new Date().getFullYear(), 0, 1), 'yyyy-MM-dd')
    let dateTo = this.datepice.transform(new Date(), 'yyyy-MM-dd')
    if (dateFrom && dateTo) {
      try {
        (await this.sentimentService.getInsiderSentiment(stockSymbols, dateFrom, dateTo)).subscribe(res => {
          this.sentiments = res.data;
          this.ref.detectChanges();
        });
      } catch (error) {
        this.toastr.error('Something went wrong with Symbol ' + stockSymbols + ', please try again.')
      }
    }
  }
}
