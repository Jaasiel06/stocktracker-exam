import { Injectable } from '@angular/core';
import { DataApi } from 'src/app/shared/services/api/data-api.enum';
import { RestApiService } from 'src/app/shared/services/api/rest-api.service';
import { environment } from 'src/environments/environment';
import { StockQuote } from '../models/stocks-quote.interface';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  token = environment.TOKEN;

  constructor(private restService: RestApiService) { }


  getStocksQuote(symbol: string) {
    return this.restService.get<StockQuote[]>(DataApi.QUOTE, '?', { symbol: symbol, token: this.token });
  }



}
