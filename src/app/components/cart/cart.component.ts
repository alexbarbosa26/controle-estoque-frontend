import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/models/cart-item';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:CartItem[];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    let cart = this.cartService.getCart();
    this.items = cart.items;
       this.loadCart();
       console.log(this.loadCart());
  }

  loadCart(){
    let cart = this.cartService.getCart();
    this.items = cart.items; 
  }




}
