import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import  { Product } from './types/product';

@Injectable()
export class ProductsDataService {
    products: Product[];
  
  constructor() { }

}