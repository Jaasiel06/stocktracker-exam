import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentIndexComponent } from '../sentiment/sentiment-index/sentiment-index.component';
import { StocksIndexComponent } from '../stocks/stocks-index/stocks-index.component';
import { NavbarComponent } from './navbar/navbar.component';


export const LayoutRoutes: Routes = [
  { path: '', component: StocksIndexComponent },
  { path: 'stocks', component: StocksIndexComponent },
  { path: 'stocks/index', component: StocksIndexComponent },
  { path: 'sentiment', component: SentimentIndexComponent },
  { path: 'sentiment/index', component: SentimentIndexComponent },
];