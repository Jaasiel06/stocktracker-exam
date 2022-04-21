import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/shared/services/localstorage/localstorage.service';
import { StockQuote } from '../models/stocks-quote.interface';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-stocks-track',
  templateUrl: './stocks-track.component.html',
  styleUrls: ['./stocks-track.component.css']
})

export class StocksTrackComponent implements OnInit {
  stockTrackForm!: FormGroup;
  stockQuotes: StockQuote[] | undefined;
  constructor(private fb: FormBuilder, public stockService: StocksService, private localStorageService: LocalstorageService, private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.stockTrackForm = this.fb.group({
      stockSymbol: ['', [Validators.required, Validators.maxLength(5)]],
    });
  }

  trackStock() {
    let key: string = this.stockTrackForm.value.stockSymbol;
    let symbol: string = this.stockTrackForm.value.stockSymbol;
    try {
      this.localStorageService.setItem(key, symbol)
      this.stockService.getStocksQuote(symbol).subscribe(res => {
        this.stockQuotes = res;
        console.log(this.stockQuotes);
        this.toastr.success(symbol + " Stocks are being tracked...")
      });

    } catch (error) {
      this.toastr.error('Something went wrong, please try again.')
    }
  }

}
