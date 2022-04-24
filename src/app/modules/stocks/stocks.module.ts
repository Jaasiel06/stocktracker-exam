import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { RouterModule } from '@angular/router';
import { StocksIndexComponent } from './stocks-index/stocks-index.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';
import { StocksTrackComponent } from './stocks-track/stocks-track.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StocksIndexComponent,
    StocksTrackComponent,
    StocksListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: StocksIndexComponent }
    ]),
    CommonModule,
    StocksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    StocksTrackComponent, StocksListComponent, StocksIndexComponent
  ]
})
export class StocksModule { }
