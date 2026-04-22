import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Gameboard} from './gameboard/gameboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gameboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tictactoe');
}
