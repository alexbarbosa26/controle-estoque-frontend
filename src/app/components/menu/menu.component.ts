import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  total(){
    return this.cartService.total();
  }
}
