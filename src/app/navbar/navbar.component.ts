import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  openedCart: boolean = false;
  cartItems: any[] = [];

  constructor(public _CartService: CartService) {
    this.cartItems = _CartService.cartItems;
  }

  removeCartItem(product: any) {
    this._CartService.removeCartItem(product);
  }

  ngOnInit(): void {
  }

}
