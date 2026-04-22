import {Component, OnInit} from '@angular/core';
import { Case } from '../case/case';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gameboard',
  imports: [Case, ReactiveFormsModule],
  templateUrl: './gameboard.html',
  styleUrl: './gameboard.css',
})
export class Gameboard implements OnInit {

  rows :number[] = [0,1,2]
  cols :number[] = [0,1,2]
  propertyForm = new FormGroup({
    numberOfCases: new FormControl(3, {nonNullable: true}),
  });

  ngOnInit() {
    this.propertyForm.controls.numberOfCases.valueChanges.subscribe(
      value => {
        for (let i = 0 ; i < value; i++) {
          this.rows[i] = i;
          this.cols[i] = i;
        }
      }
    )
  }
  verifyWin(){
    //todo : verif si toutes les cases d'une ligne/col ou d'une diagonale (att 2 sens ) appart a un joeuru
    //todo : ligne
    //todo : colonne
    //todo : diag
    //todo : autre dia
  }
}
