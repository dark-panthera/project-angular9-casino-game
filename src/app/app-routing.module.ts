import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'topgames', pathMatch: 'full' },
  {
    path: 'topgames',
    loadChildren: () =>
      import('./topgames/topgames.module').then((m) => m.TopgamesModule),
  },
  {
    path: 'newgames',
    loadChildren: () =>
      import('./newgames/newgames.module').then((m) => m.NewgamesModule),
  },
  {
    path: 'slots',
    loadChildren: () =>
      import('./slots/slots.module').then((m) => m.SlotsModule),
  },
  {
    path: 'jackpots',
    loadChildren: () =>
      import('./jackpots/jackpots.module').then((m) => m.JackpotsModule),
  },
  {
    path: 'live',
    loadChildren: () => import('./live/live.module').then((m) => m.LiveModule),
  },
  {
    path: 'blackjack',
    loadChildren: () =>
      import('./blackjack/blackjack.module').then((m) => m.BlackjackModule),
  },
  {
    path: 'roulette',
    loadChildren: () =>
      import('./roulette/roulette.module').then((m) => m.RouletteModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then((m) => m.TableModule),
  },
  {
    path: 'poker',
    loadChildren: () =>
      import('./poker/poker.module').then((m) => m.PokerModule),
  },
  {
    path: 'others',
    loadChildren: () =>
      import('./others/others.module').then((m) => m.OthersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
