import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlackjackComponent } from './blackjack.component';

const routes: Routes = [{ path: '', component: BlackjackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackjackRoutingModule { }
