import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NumberService } from "../table/number.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @Output() addMethod = new EventEmitter<number>()
  numberList: number[] = [];
  number = 0;


  constructor(nmbrService: NumberService) {
    this.numberList = nmbrService.list;
// this.addElement=nmbrService.addElement();

  }
  addElement() {

    // var lastnumber: number = this.numberList[this.numberList.length - 1];
    // if (lastnumber) {
    //   this.addMethod.emit(lastnumber + 1);
    //   // this.myList.push(lastnumber + 1)
    // }
  }
  increment() {
    this.number = this.number + 1
  }
  decrement() {
    if (this.number !== 0)
      this.number = this.number - 1
  }
}
