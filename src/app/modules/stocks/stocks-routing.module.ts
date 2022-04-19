import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksIndexComponent } from './stocks-index/stocks-index.component';
import { StocksListComponent } from './stocks-list/stocks-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stocks',
    component: StocksIndexComponent,
    data: {
      title: 'stocks'
    }
  },
  {
    path: 'index',
    component: StocksIndexComponent,
    data: {
      title: 'stocks'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
