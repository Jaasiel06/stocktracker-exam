import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentIndexComponent } from './sentiment-index/sentiment-index.component';

const routes: Routes = [
  {
    path: '',
    component: SentimentIndexComponent
  },
  {
    path: 'index',
    component: SentimentIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SentimentRoutingModule { }
