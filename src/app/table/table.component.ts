import { Component } from "@angular/core";

@Component({
  selector: 'basic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  products = [
    {
      id: 1,
      name: 'muz',
      price: 12
    }
  ]
  DeleteProduct(id: number) {
    this.products = this.products.filter(x => x.id !== id)
  }
  AddProduct(productName: string) {
    let lastIndex=this.products[this.products.length-1].id
    let newObject = {
      id: lastIndex? lastIndex+1:1,
      name: productName,
      price: 12
    }
    this.products.push(newObject)
  }

}
