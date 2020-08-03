import { Categories } from './../categories.model';
import { Jackpots } from './../jackpots.model';
import { Games } from './../games';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public games$ = new BehaviorSubject<Games[]>([]);
  public jackpots$ = new BehaviorSubject<Jackpots[]>([]);

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Games[]> {
    return this.http.get<Games[]>(
      `http://stage.whgstage.com/front-end-test/games.php`
    );
  }
  /*
.subscribe((games: Games[]) => {
        this.games$.next(games);
        console.log(games);
      });
  */

  getGameByCategory(category: string) {
    return this.http.get(
      `http://stage.whgstage.com/front-end-test/games.php`
    )
      .pipe(
        map((games: Games[]) => {
          const sub = [];


          games.forEach((game: Games) => {
            if (game.categories.includes('top')) {
              sub.push(game);
            }
          });
          this.games$.next(sub);


          return sub;
        }),
        mergeMap((games: Games[]) => {
          games.forEach((game: Games) => {
            this.jackpots$.getValue().forEach((jackpot: Jackpots) => {
              if (jackpot.game === game.id) {
                game.jackpots = jackpot.amount;
              }
            });
          });

          return games;
        })
      );
  }

  getJackpot() {
    this.http.get(
      `http://stage.whgstage.com/front-end-test/jackpots.php`
    ).subscribe((jackpot: Jackpots[]) => {
      this.jackpots$.next(jackpot);
      // console.log(jackpot);
    });
  }
}
