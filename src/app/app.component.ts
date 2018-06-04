import { Component } from '@angular/core';
import { IProduct } from './entities/product';
import { ProductService } from './entities/products.service';

@Component({
  selector: 'my-app',
  // template: `<h2 color="red">Hello {{name}} {{family}}</h2>`,
  templateUrl: 'app/app.component.html',
  providers: [ProductService],

})

export class AppComponent {
  name: number;
  family: string;
  status: boolean;
  appList: any[];
  iproducts: IProduct[];

  constructor(private _product: ProductService) {
    this.name = 5;
    this.family = "Kornwell"
    this.status = true
    // this.iproducts;
    this.appList = [{
      "ID": "1",
      "url": 'app/images/1.jpg'
    },
    {
      "ID": "2",
      "url": 'app/images/2.png'
    }];

  }

  ngOnInit() : void {
    console.log({onInit: "on init"})
    this._product.getproducts()
    .subscribe(iproducts => this.iproducts = iproducts);
 }

}
