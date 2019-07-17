import { Injectable } from '@angular/core';
import { PRODUCTS, Product } from './mock-products';

@Injectable()
export class ProductsDataService {
  products: Product[];
  
  constructor() {
    this.products = PRODUCTS;
  }


  getAllProducts() {
    // return all products here to be displayed on products overview page
  }

  addNewProduct(name: string, price: number = 0){
    // const id = <random-generated-id> ;
    // add new product to list
  }
}