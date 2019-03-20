import { NgModule } from '@angular/core';

import { DiscountComponent } from './discount.component';
import { DiscountRoutingModule } from './discount-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DiscountComponent
  ],
  imports: [
    SharedModule,
    DiscountRoutingModule
  ]
})
export class DiscountModule { }
