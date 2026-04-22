import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-case',
  imports: [],
  templateUrl: './case.html',
  styleUrl: './case.css',
})
export class Case {
  @Input() index : number[]=[]


  onClick(){
    console.log(this.index);
  }
}
