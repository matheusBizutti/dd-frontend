import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
