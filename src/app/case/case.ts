import {Component, Input} from '@angular/core';
import {CaseState, GameLogique} from '../game-logique';

@Component({
  selector: 'app-case',
  imports: [],
  templateUrl: './case.html',
  styleUrl: './case.css',
})
export class Case {
  @Input() row: number = 0;
  @Input() col: number = 0;
  constructor(protected gameLogique: GameLogique) {
  }
  get state(): CaseState {
    return this.gameLogique.board[this.row][this.col];
  }
  onClick() {
    this.gameLogique.play(this.row, this.col);
  }
}