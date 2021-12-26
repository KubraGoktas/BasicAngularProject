import { Component, Input } from "@angular/core";


@Component({
    selector:'app-home',
    templateUrl:'./home.component.html'
})

export class HomeComponent{
   @Input() myList : number[]=[];
   number=0;

  //  addElement(){

  //   let lastnumber:number|undefined=this.myList.pop();
  //   if(lastnumber)
  //    this.myList.push(lastnumber+1)
  //    console.log('eklendi', this.myList)

  //  }
  increment(){
    this.number=this.number+1
  }
  decrement(){
    if(this.number!==0)
    this.number=this.number-1
  }
}
