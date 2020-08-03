import { Games } from './../games';
import { GamesService } from './../shared/games.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.scss']
})
export class BlackjackComponent implements OnInit {
  protected games: Games[];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getGameByCategory('top').subscribe((games: any) => {
      console.log(games);

      this.games = games;
    });
  }

}
