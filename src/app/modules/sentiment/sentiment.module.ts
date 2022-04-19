import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentimentRoutingModule } from './sentiment-routing.module';
import { SentimentIndexComponent } from './sentiment-index/sentiment-index.component';


@NgModule({
  declarations: [
    SentimentIndexComponent
  ],
  imports: [
    CommonModule,
    SentimentRoutingModule
  ]
})
export class SentimentModule { }
