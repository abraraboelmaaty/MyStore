import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]|undefined;
  productAmount:number = 10;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(result)=>{
        console.log(result),
        this.products = result},
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('get all product');
      },
    })

  }

}
