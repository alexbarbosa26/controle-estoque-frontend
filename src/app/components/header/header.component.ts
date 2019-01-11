import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  total(){
    return this.cartService.total();
  }

}
