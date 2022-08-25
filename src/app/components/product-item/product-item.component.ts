import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product} from 'src/app/models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  proId :number = 0;
  products: Product[] | undefined;
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
            console.log(err);
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
  }


