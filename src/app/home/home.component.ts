import { Component, Input } from "@angular/core";


@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{
   @Input() myList : number[]=[];
   number=0;

   addElement(){

    let lastnumber=this.myList[this.myList.length-1];
    if(lastnumber)
     this.myList.push(lastnumber+1)
     console.log('eklendi', this.myList)

   }
  increment(){
    this.number=this.number+1
  }
  decrement(){
    if(this.number!==0)
    this.number=this.number-1
  }
}
