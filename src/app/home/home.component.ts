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
    { label: 'Clientes', link: 'customers', icon: 'thf-icon-users' },
    { label: 'Descontos', link: 'discounts', icon: 'thf-icon-credit-payment' },
    { label: 'Percentual', link: 'discounts', icon: 'thf-icon-debit-payment' },
    { label: 'Relatório', link: 'discounts', icon: 'thf-icon thf-icon-document-filled' }
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
