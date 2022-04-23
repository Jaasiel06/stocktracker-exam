import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { SentimentInsider } from '../models/sentiment.model';
import { SentimentService } from '../services/sentiment.service';

@Component({
  selector: 'app-sentiment-index',
  templateUrl: './sentiment-index.component.html',
  styleUrls: ['./sentiment-index.component.css']
})
export class SentimentIndexComponent implements OnInit {
  sentiments: SentimentInsider[] = [];
  subscription: Subscription = new Subscription();

  constructor(private toastr: ToastrService, private sentimentService: SentimentService, private datepice: DatePipe) { }

  ngOnInit(): void {
    this.getInsiderSentimentFromApi('GE')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  async getInsiderSentimentFromApi(stockSymbols: string) {
    let dateFrom = this.datepice.transform('2022-01-01', 'yyyy-MM-dd')

    let dateTo = this.datepice.transform(new Date, 'yyyy-MM-dd')
    if (dateFrom && dateTo) {
      try {
        (await this.sentimentService.getInsiderSentiment(stockSymbols, dateFrom, dateTo)).subscribe(res => {
          this.sentiments = res.data;
        });

      } catch (error) {
        this.toastr.error('Something went wrong with Stock Symbol ' + stockSymbols + ', please try again.')
      }
    }
  }
}
