import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewgamesComponent } from './newgames.component';

const routes: Routes = [{ path: '', component: NewgamesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewgamesRoutingModule { }
