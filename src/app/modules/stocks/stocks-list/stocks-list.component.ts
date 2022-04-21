import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LocalstorageService } from 'src/app/shared/services/localstorage/localstorage.service';
import { StockQuote } from '../models/stocks-quote.interface';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  stocksQuotes: StockQuote[] = [];
  subscription: Subscription = new Subscription();

  constructor(private stockService: StocksService, private localStorageService: LocalstorageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.subscribeToStocksQuotes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  subscribeToStocksQuotes() {
    this.stockService.stockQuote$.subscribe(res => {
      this.stocksQuotes.push(res)
    })
  }

  unTrackStock(symbol: string) {
    //remove from stock quote list and reset localstorage
    this.stocksQuotes = this.stocksQuotes.filter(x => x.symbol != symbol);
    let localStorageKey: string = "STOCKSSYMBOLSTRACKED";
    let stocksTracked: string[] = [];
    let stocksTrackedLocalstorage: string | null = this.localStorageService.getWithExpiry(localStorageKey);
    if (stocksTrackedLocalstorage) {
      stocksTracked = JSON.parse(stocksTrackedLocalstorage);
    } else {
      return;
    }
    let idx = stocksTracked.indexOf(symbol);
    if (idx != -1) { stocksTracked.splice(idx, 1) }
    let symbolsString = JSON.stringify(stocksTracked);
    this.localStorageService.setItem(localStorageKey, symbolsString)
    this.toastr.success('Stock symbol being un-tracked')
  }

}
