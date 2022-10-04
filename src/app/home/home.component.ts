import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: any;
  quantity = 1;

  constructor(
    public _ProductsService: ProductsService,
    public _CartService: CartService
  ) {
    this.product = _ProductsService.product;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity == 1) {
      return;
    } else {
      this.quantity--;
    }
  }

  addToCart(product: any) {
    this._CartService.addToCart(product, this.quantity);
    console.log(this._CartService.cartItems);
  }

  ngOnInit(): void {
  }
}
