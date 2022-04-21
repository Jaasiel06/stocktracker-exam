import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataApi } from 'src/app/shared/services/api/data-api.enum';
import { RestApiService } from 'src/app/shared/services/api/rest-api.service';
import { environment } from 'src/environments/environment';
import { StockQuote } from '../models/stocks-quote.interface';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  token = environment.TOKEN;
  stocksQuotes: StockQuote[] = [];
  private _stocksQuoteSource: Subject<StockQuote> = new Subject<StockQuote>();
  stockQuote$ = this._stocksQuoteSource.asObservable();



  constructor(private restService: RestApiService) { }

  async getStocksQuote(symbol: string) {
    this.restService.get<StockQuote>(DataApi.QUOTE, '?', { symbol: symbol, token: this.token }).subscribe(res => {
      this._stocksQuoteSource.next(res);
      this.stocksQuotes.push(res);
    });
  }

  async getSymbols(symbol: string) {
    this.restService.get<StockQuote>(DataApi.SYMBOLSEARCH, '?', { q: symbol, token: this.token }).subscribe(res => {
      this._stocksQuoteSource.next(res);
      this.stocksQuotes.push(res);
    });
  }


}
