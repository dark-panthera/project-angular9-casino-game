import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackjackRoutingModule } from './blackjack-routing.module';
import { BlackjackComponent } from './blackjack.component';
// import { CardHolderModule } from '../shared/cardholder.module';

@NgModule({
  declarations: [BlackjackComponent],
  imports: [
    CommonModule,
    BlackjackRoutingModule,

    SharedModule
  ]
})
export class BlackjackModule { }
