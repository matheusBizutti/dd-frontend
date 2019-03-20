import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThfModule } from '@totvs/thf-ui';
import { ThfTemplatesModule } from '@totvs/thf-templates';

@NgModule({
  imports: [
    CommonModule,
    ThfModule,
    ThfTemplatesModule
  ],
  exports: [
    CommonModule,
    ThfModule,
    ThfTemplatesModule
  ]
})
export class SharedModule { }
