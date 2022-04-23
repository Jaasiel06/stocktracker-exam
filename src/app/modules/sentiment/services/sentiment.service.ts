import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataApi } from 'src/app/shared/services/api/data-api.enum';
import { RestApiService } from 'src/app/shared/services/api/rest-api.service';
import { environment } from 'src/environments/environment';
import { StockQuote } from '../../stocks/models/stocks-quote.interface';
import { SentimentInsider } from '../models/sentiment.model';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  token = environment.TOKEN;
  stocksQuotes: StockQuote[] = [];
  private _stocksQuoteSource: Subject<StockQuote> = new Subject<StockQuote>();
  stockQuote$ = this._stocksQuoteSource.asObservable();


  constructor(private restService: RestApiService) { }

  async getInsiderSentiment(symbol: string, dateFrom: string, dateTo: string) {
    return this.restService.get<{ data: SentimentInsider[] }>(DataApi.SENTIMENT, '?', { symbol: symbol, from: dateFrom, to: dateTo, token: this.token })
  }



}
