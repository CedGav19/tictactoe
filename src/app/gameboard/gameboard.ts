import {Component} from '@angular/core';
import { Case } from '../case/case';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { GameLogique } from '../game-logique';
import {submit} from '@angular/forms/signals';

@Component({
  selector: 'app-gameboard',
  imports: [Case, ReactiveFormsModule],
  templateUrl: './gameboard.html',
  styleUrl: './gameboard.css',
})
export class Gameboard {

  constructor(protected gameLogique: GameLogique) {
  }
  propertyForm = new FormGroup({
    numberOfCases: new FormControl(3, {nonNullable: true}),
    symbol: new FormControl<'croix' | 'rond'>('croix', {nonNullable: true}),
  });

  onSubmit() {
    this.gameLogique.reset(
      this.propertyForm.controls.numberOfCases.value,
      this.propertyForm.controls.symbol.value,
    );
  }

  protected readonly submit = submit;
}
