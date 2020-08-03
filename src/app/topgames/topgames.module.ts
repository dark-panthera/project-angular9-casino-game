import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopgamesRoutingModule } from './topgames-routing.module';
import { TopgamesComponent } from './topgames.component';


@NgModule({
  declarations: [TopgamesComponent],
  imports: [
    CommonModule,
    TopgamesRoutingModule
  ]
})
export class TopgamesModule { }
