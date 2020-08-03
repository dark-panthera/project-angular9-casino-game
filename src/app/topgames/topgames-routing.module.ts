import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopgamesComponent } from './topgames.component';

const routes: Routes = [{ path: '', component: TopgamesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopgamesRoutingModule { }
