import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItem:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    if(this.cartItem==null)
      this.cartItem = 0;
    console.log(JSON.parse(localStorage.getItem("cartValue")!))
    this.cartItem = JSON.parse(localStorage.getItem("cartValue")!);
  }

}
