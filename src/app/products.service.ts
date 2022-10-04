import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  product =
    {
      "id": 1,
      "title": 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      "category": 'Men',
      "rate": 4.0,
      "reviews": 22,
      "before_price": 1150,
      "after_price": 800,
      "discount": 30,
      "size": 'Large',
    };
}
