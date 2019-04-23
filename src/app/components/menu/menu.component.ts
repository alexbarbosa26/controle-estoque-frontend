import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/domain/cart.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(
    private cartService: CartService,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }

  usuario() {
    const usr = this.storage.getLocalUser().email;
    const pos = usr.indexOf('@');
    return usr.substring(0, pos);
  }

  total() {
    return this.cartService.total();
  }
}
