import { GamesService } from './shared/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-casino';

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.gameService.getJackpot();
  }
}
