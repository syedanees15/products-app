import { Injectable } from '@angular/core';
import { PRODUCTS, Product } from './mock-products';

@Injectable()
export class ProductsDataService {
  products: Product[];
  
  constructor() {
    this.products = PRODUCTS;
  }


  getAllProducts() {
  }

  addNewProduct(name: string, price: number = 0){
  }
}