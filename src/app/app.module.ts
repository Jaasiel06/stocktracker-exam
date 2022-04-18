import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SentimentModule } from './sentiment/sentiment.module';
import { StocksModule } from './stocks/stocks.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StocksModule,
    SentimentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }