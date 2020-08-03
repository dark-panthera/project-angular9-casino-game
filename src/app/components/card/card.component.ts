import { Games } from './../../games';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() game: Games;

  @Input() showRibbon = false;

  @Input() displayJackpot = false;
  // imgUrl = '//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg';

  constructor() {

  }

  ngOnInit(): void {

  }

}
