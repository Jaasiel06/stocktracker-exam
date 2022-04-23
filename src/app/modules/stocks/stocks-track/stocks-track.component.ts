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

  constructor(private fb: FormBuilder, private stockService: StocksService, private localStorageService: LocalstorageService, private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.stockTrackForm = this.fb.group({
      stockSymbol: ['', [Validators.required, Validators.maxLength(5)]],
    });
    this.loadStocksQuotes();
  }

  loadStocksQuotes() {
    let localStorageKey: string = "STOCKSSYMBOLSTRACKED";
    let stocksTracked: string[] = [];
    let stocksTrackedLocalstorage: string | null = this.localStorageService.getWithExpiry(localStorageKey);
    if (stocksTrackedLocalstorage) {
      stocksTracked = JSON.parse(stocksTrackedLocalstorage);
    } else {
      return;
    }
    this.getStockQuotesFromApi(stocksTracked)
  }

  trackStock() {
    //get Localstorage for the symbols
    let localStorageKey: string = "STOCKSSYMBOLSTRACKED";
    let stocksTracked: string[] = [];
    let symbolInput: string = this.stockTrackForm.value.stockSymbol;
    symbolInput = symbolInput.toUpperCase();
    try {

      //if localstorage exist, them parse it to string[]
      let stocksTrackedLocalstorage: string | null = this.localStorageService.getWithExpiry(localStorageKey);
      if (stocksTrackedLocalstorage) {
        stocksTracked = JSON.parse(stocksTrackedLocalstorage);
      }

      //validate duplicate symbol
      if (stocksTracked.filter(x => x == symbolInput).length > 0) {
        this.toastr.error('This Stock Symbol: ' + symbolInput + ' already in the list.')
        return;
      }
      stocksTracked.push(symbolInput)

      //stringify stocks and save it to localStorage
      let symbolsString = JSON.stringify(stocksTracked);
      this.localStorageService.setItem(localStorageKey, symbolsString)
      this.getStockQuotesFromApi([symbolInput])
      this.toastr.success('Stock symbol being tracked')
    } catch (error) {
      this.toastr.error('Something went wrong with Stock Symbol ' + symbolInput + ', please try again.')
    }
  }

  getStockQuotesFromApi(stockSymbols: string[]) {
    for (let index = 0; index < stockSymbols.length; index++) {
      const symbol = stockSymbols[index];
      try {
        this.stockService.getStocksQuote(symbol)
      } catch (error) {
        this.toastr.error('Something went wrong with Stock Symbol ' + symbol + ', please try again.')
      }
    }
  }


}
