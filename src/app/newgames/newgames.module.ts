import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewgamesRoutingModule } from './newgames-routing.module';
import { NewgamesComponent } from './newgames.component';


@NgModule({
  declarations: [NewgamesComponent],
  imports: [
    CommonModule,
    NewgamesRoutingModule
  ]
})
export class NewgamesModule { }
