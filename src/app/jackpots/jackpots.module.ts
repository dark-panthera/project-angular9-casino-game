import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JackpotsRoutingModule } from './jackpots-routing.module';
import { JackpotsComponent } from './jackpots.component';


@NgModule({
  declarations: [JackpotsComponent],
  imports: [
    CommonModule,
    JackpotsRoutingModule
  ]
})
export class JackpotsModule { }
