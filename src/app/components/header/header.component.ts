import { StorageService } from 'src/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private storage: StorageService
  ) { }

  ngOnInit() {}

  usuario() {
    return this.storage.getLocalUser().email;
  }

  total() {
    return this.cartService.total();
  }

}
