import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutes } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),

  ]
})
export class LayoutModule { }
