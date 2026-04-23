import { Injectable } from '@angular/core';
export type CaseState = 'rien' | 'croix' | 'rond';
@Injectable({
  providedIn: 'root',
})
export class GameLogique {
  size: number = 3;
  board: CaseState[][] = this.emptyBoard(3);
  player: 'croix' | 'rond' = 'croix';
  opponent: 'croix' | 'rond' = 'rond';
  winner: CaseState | null = null;

  computerWins= 0;
  playerWins = 0;

  emptyBoard(size: number): CaseState[][] {
    const board: CaseState[][] = [];
    for (let i = 0; i < size; i++) {
      const row: CaseState[] = [];
      for (let j = 0; j < size; j++) {
        row.push('rien');
      }
      board.push(row);
    }
    return board;
  }

  reset(size: number, player: 'croix' | 'rond') {
    this.size = size;
    this.board = this.emptyBoard(size);
    this.player = player;
    this.opponent = player ==="croix" ? 'rond' : 'croix';
    this.winner = null;
    if (this.opponent === 'croix') {
      this.computerPlay();
    }
  }

  play(row: number, col: number) {
    if (this.winner || this.board[row][col] !== 'rien') return;
    this.board[row][col] = this.player;
    this.winner = this.checkWin();
    if (!this.winner) {
      this.computerPlay();
    }
  }

  computerPlay() {
    if (this.isBoardFull()) return;
    const row = Math.floor(Math.random() * this.size);
    const col = Math.floor(Math.random() * this.size);
    if (this.board[row][col] !== 'rien') {
      this.computerPlay();
      return;
    }
    this.board[row][col] = this.opponent;
    this.winner = this.checkWin();
  }

  checkWin(): CaseState | null {
    //recup des etats de chaque ligne posisble
    const n = this.size;
    const lines: CaseState[][] = [];
    for (let i = 0; i < n; i++) {
      lines.push(this.board[i]);
      lines.push(this.board.map(r => r[i]));
    }
    lines.push(this.board.map((r, i) => r[i]));
    lines.push(this.board.map((r, i) => r[n - 1 - i]));

    // verif vicoire
    for (const line of lines) {
      if (line[0] === 'rien') continue;
      let different = false;
      for (const cell of line) {
        if (cell !== line[0]) {
          different = true;
          break;
        }
      }
      if (!different) {
        if (line[0] === this.player) {
          this.playerWins++;
        }
        else {
          this.computerWins++;
        }
        return line[0];
      }
    }
    return null;
  }
  isBoardFull(): boolean {
    for (const row of this.board) {
      for (const cell of row) {
        if (cell === 'rien') return false;
      }
    }
    return true;
  }
}
