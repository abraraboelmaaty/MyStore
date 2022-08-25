import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product} from 'src/app/models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() data:any = {}
  @Output() item = new EventEmitter();
  Ammount:number[] = [1,2,3,4,5,6,7,8,9,10]
  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

  }
  add(){
    this.item.emit(this.data)
  }

}
