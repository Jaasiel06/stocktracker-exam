import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private stockService: StocksService) { }

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



}
