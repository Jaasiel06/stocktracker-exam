import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksIndexComponent } from './modules/stocks/stocks-index/stocks-index.component';
import { StocksModule } from './modules/stocks/stocks.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    loadChildren: () => import('./shared/routes/app-routes.module').then(m => m.AppRoutesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
