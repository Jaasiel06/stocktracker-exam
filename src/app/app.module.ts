import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksModule } from './modules/stocks/stocks.module';

import { SentimentModule } from './modules/sentiment/sentiment.module';
import { LayoutModule } from './shared/layout/layout.module';

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
