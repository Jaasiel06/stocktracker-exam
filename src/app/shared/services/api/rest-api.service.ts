import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DataApi, dataApiRootMap } from './data-api.enum';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  http: HttpClient;
  baseUrl: string = environment.API_URL;
  constructor(_http: HttpClient) {
    this.http = _http;
  }

  public _addStandardHeaders(header: HttpHeaders) {
    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');
    header = header.append('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    header = header.append('Access-Control-Allow-Origin', 'GET, POST, DELETE, PUT');
    header = header.append('Authorization', 'Basic ' + btoa('username,password'));
    return header;
  }


  post<T>(api: DataApi, Method: string, parametros: any): Observable<T> {

    return this.http.post<T>(this.baseUrl + '/' + dataApiRootMap[api] + '/' + Method, parametros);
  }

  get<T>(api: DataApi, Method: string, item?: any, apiParms?: HttpParams): Observable<T> {
    if (!apiParms) { apiParms = new HttpParams(); }
    if (item) {
      const keys = Object.keys(item) as Array<keyof T>;
      for (const key of keys) {
        apiParms = apiParms.append(key.toString(), item[key].toString());
      }
    }
    return this.http.get<T>(this.baseUrl + '/' + dataApiRootMap[api] + '/' + Method + '' + apiParms);
  }
}
