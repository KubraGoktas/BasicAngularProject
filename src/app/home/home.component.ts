import { Component, Input, Output, EventEmitter } from "@angular/core";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  @Output() addMethod = new EventEmitter<number>()
  @Input() myList: number[] = [];
  number = 0;

  addElement() {

    var lastnumber: number = this.myList[this.myList.length - 1];
    if (lastnumber) {
      this.addMethod.emit(lastnumber + 1);
      // this.myList.push(lastnumber + 1)
    }
  }
  increment() {
    this.number = this.number + 1
  }
  decrement() {
    if (this.number !== 0)
      this.number = this.number - 1
  }
}
