import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
