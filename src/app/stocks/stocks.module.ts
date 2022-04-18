import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksIndexComponent } from './stocks-index/stocks-index.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StocksIndexComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: StocksIndexComponent }
    ]),
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
