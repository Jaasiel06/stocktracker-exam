import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/modules/home/welcome/welcome.component';
import { SentimentIndexComponent } from 'src/app/modules/sentiment/sentiment-index/sentiment-index.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';




export const AppROUTES: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: WelcomeComponent,
  },
  {
    path: 'stocks',
    loadChildren: () => import('src/app/modules/stocks/stocks.module').then(m => m.StocksModule),
  },
  {
    path: 'sentiment',
    loadChildren: () => import('src/app/modules/sentiment/sentiment.module').then(m => m.SentimentModule),
  },
  { path: '**', component: PageNotFoundComponent },
];