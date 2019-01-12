import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/domain/cart.service';
import { StorageService } from 'src/services/storage.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { UsuarioDTO } from 'src/models/usuario.dto';
import { Router } from '@angular/router';

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
