import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JackpotsComponent } from './jackpots.component';

const routes: Routes = [{ path: '', component: JackpotsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JackpotsRoutingModule { }
