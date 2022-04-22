import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataApi } from 'src/app/shared/services/api/data-api.enum';
import { RestApiService } from 'src/app/shared/services/api/rest-api.service';
import { environment } from 'src/environments/environment';
import { CompanyProfile } from '../models/company-profile.interface';
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
      res.symbol = symbol;
      try {
        this.getCompanyProfile(symbol).then(company => {
          res.companyProfile = company;
        })
      } catch (error) {
        console.log(error);
      }
      this._stocksQuoteSource.next(res);
      this.stocksQuotes.push(res);
    });
  }

  async getCompanyProfile(symbol: string) {
    return this.restService.get<CompanyProfile>(DataApi.COMPANY_PROFILE, '?', { symbol: symbol, token: this.token }).toPromise();
  }

  async getSymbols(symbol: string) {
    this.restService.get<StockQuote>(DataApi.SYMBOL_SEARCH, '?', { q: symbol, token: this.token }).subscribe(res => {
      this._stocksQuoteSource.next(res);
      this.stocksQuotes.push(res);
    });
  }


}
