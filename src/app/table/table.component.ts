import { Component } from "@angular/core";

@Component({
  selector:'basic-table',
  templateUrl:'./table.component.html',
  styleUrls:['./table.component.css']
})

export class TableComponent{
products=[
  {
    id:1,
    name:'muz',
    price:12
  }
]
  // DeleteProduct(id){

  // }

}
