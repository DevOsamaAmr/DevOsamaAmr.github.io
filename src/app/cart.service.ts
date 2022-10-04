import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  productsList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productsList.asObservable()
  }

  setProduct(product: any) {
    this.cartItems.push(...product);
    this.productsList.next(product);
  }

  addToCart(product: any, quantity: any) {
    product.quantity = quantity;
    this.cartItems.push(product);
    this.productsList.next(this.cartItems);
  }

  removeCartItem(product: any) {
    this.cartItems.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1);
      }
    });
  }
}
