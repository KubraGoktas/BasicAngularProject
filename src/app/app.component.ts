import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'y';
  list: number[] = [1, 2, 3, 4, 5, 6]
  addElement(addNumber: number) {
    this.list.push(addNumber)
    console.log(this.list)
  }
}
