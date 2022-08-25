import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]|undefined;
  cartProducts:any[] = [];

  constructor(
    private productService:ProductService,
    private cartService:CartService,
    ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(result)=>{
        console.log(result),
        this.products = result},
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log('get all product');
      },
    })

  }

  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let itemExist = this.cartProducts.find(item=>item.id == event.id);
      if(itemExist){
        alert("this item alredy in your cart")
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",  JSON.stringify(this.cartProducts));
        this.cartService.cartItem++;
      }

    }else{
      this.cartProducts.push(event);
      localStorage.setItem("cart",  JSON.stringify(this.cartProducts));
      this.cartService.cartItem++;
    }

}
}
