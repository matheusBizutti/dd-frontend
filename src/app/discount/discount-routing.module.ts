
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscountComponent } from './discount.component';

export const discountRoutes: Routes = [
  { path: '', component: DiscountComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(discountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DiscountRoutingModule { }
