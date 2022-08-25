import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = "./../../assets/data.json"
  constructor(private http:HttpClient) {}
  getAllProducts(){
    return this.http.get<Product[]>(this.baseUrl);
  }

  public getProduct(id: number) {
    return this.http.get<Product[]>(`${this.baseUrl}`)
      .pipe(
        map((products: Product[]) => products.filter(product => product.id === id))
      );
  }
  // public getProduct(id: number) {
  //   return this.http.get<Product>(`${this.baseUrl}/${id}`)
      // .pipe(
      //   map((products: Product[]) => products.filter(product => product.id === id))
      // );
  // }
}
