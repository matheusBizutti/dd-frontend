import { Component, OnInit } from '@angular/core';
import { ThfPageAction } from '@totvs/thf-ui';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: []
})
export class CustomersComponent implements OnInit {

  public readonly actions: Array<ThfPageAction> = [
    { label: 'Novo cliente', action: () => {}, icon: 'thf-icon thf-icon-plus' }
  ];

  constructor() {}

  ngOnInit() {}
}


