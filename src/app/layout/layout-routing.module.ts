import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksIndexComponent } from '../stocks/stocks-index/stocks-index.component';
import { NavbarComponent } from './navbar/navbar.component';


export const LayoutRoutes: Routes = [
  { path: 'stocks', component: StocksIndexComponent },
];