import { Component, OnInit } from '@angular/core';
import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';
import { ThfToolbarProfile, ThfToolbarAction } from '@totvs/thf-ui/components/thf-toolbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly items: Array<ThfMenuItem> = [
    { label: 'Customers', link: 'customers', icon: 'thf-icon-users' },
    { label: 'Discounts', link: 'discounts', icon: 'thf-icon-credit-payment' }
  ];

  public readonly profile: ThfToolbarProfile = {
    subtitle: 'dev@totvs.com.br',
    title: 'Mr. Dev Totvs'
  };

  public readonly profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => {} }
  ];

  constructor() { }

  ngOnInit() { }

}
