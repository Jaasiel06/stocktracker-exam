import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AppROUTES } from './app-routes';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AppROUTES),

  ]
})
export class AppRoutesModule { }
