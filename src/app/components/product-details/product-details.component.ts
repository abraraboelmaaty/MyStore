import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  proId :number = 0;
  products: Product[] | undefined;
  cartProducts:any[] = [];
  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        this.proId =  Number(params.get('id'));
      })
      if (this.proId != 0) {
        this.productService.getProduct(this.proId).subscribe({
          next: (res) => {
            console.log(res);
            this.products = res;
          },
          error: (err) => {
            alert(err.message);
          },
          complete: () => {
            console.log('get one');
          },
        });
      }
    }
    back(){
      this.router.navigate(['/products']);
    }
    addToCart(item:any){

      if("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
        let itemExist = this.cartProducts.find(data=>data.id == item.id);
        if(itemExist){
          alert("this item alredy in your cart")
        }else{
          this.cartProducts.push(item);
          localStorage.setItem("cart",  JSON.stringify(this.cartProducts));
        }

      }else{
        this.cartProducts.push(item);
        localStorage.setItem("cart",  JSON.stringify(this.cartProducts));
      }
    }
}
