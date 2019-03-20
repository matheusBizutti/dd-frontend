import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'discounts',
        loadChildren: './discount/discount.module#DiscountModule'
      },
      { path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule'
      }
    ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
