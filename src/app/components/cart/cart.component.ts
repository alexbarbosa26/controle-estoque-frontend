import { ProdutoDTO } from 'src/models/produto.dto';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/models/cart-item';
import {  Router } from '@angular/router';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items:CartItem[];
  loading: boolean;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
       this.loadCart();
       this.loading = true;
  }

  loadCart(){
    let cart = this.cartService.getCart();
    this.items = cart.items; 
  }

  removeItem(produto: ProdutoDTO){
    this.items = this.cartService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO){
    this.items = this.cartService.increaseQuantity(produto).items;
  }

  decreaseItem(produto: ProdutoDTO){
    this.items = this.cartService.decreaseQuantity(produto).items;
  }

  total(){
    return this.cartService.total();
  }

  goOn(){
    this.router.navigate(['categorias-list'])
}

}
