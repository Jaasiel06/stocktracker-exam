import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SentimentRoutingModule } from './sentiment-routing.module';
import { SentimentIndexComponent } from './sentiment-index/sentiment-index.component';


@NgModule({
  declarations: [
    SentimentIndexComponent
  ],
  imports: [
    CommonModule,
    SentimentRoutingModule
  ],
  providers: [DatePipe],
})
export class SentimentModule { }
