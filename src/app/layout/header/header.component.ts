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
    this.cartItem = this.cartService.cartItem;
  }

}
