import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any[] = [];
  user:User = new User("","",0);
  total:number = 0;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllCartProducts();
    this.getCartTotalPrice();

  }

  getAllCartProducts(){
    if("cart" in localStorage){
      this.products = JSON.parse(localStorage.getItem("cart")!);
    }
    console.log(this.products)
  }
  onSubmit(){
    this.router.navigate(['/confirmation'],{queryParams:{name:this.user.name,totalprice:this.total}});
    localStorage.clear();
  }
  getCartTotalPrice(){
    this.total = 0;
    for(let x in this.products){
      this.total+= this.products[x].price * parseInt(this.products[x].amount),
      console.log(this.total)


    }
  }


  detectChange(){
    this.getCartTotalPrice();
    localStorage.setItem("cart",  JSON.stringify(this.products));
  }
  delete(index:number){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this deleted item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!',
    }).then((result) => {
      if (result.value) {
        this.products.splice(index,1);
        this.getCartTotalPrice();
        localStorage.setItem("cart",  JSON.stringify(this.products));
      }
      this.router.navigate(['/cart']);
    });

  }
  clear(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this deleted item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it!',
    }).then((result) => {
      if (result.value) {
        this.products = [];
        this.getCartTotalPrice();
        localStorage.setItem("cart",  JSON.stringify(this.products));
      }
      this.router.navigate(['/cart']);
    });

  }
}
