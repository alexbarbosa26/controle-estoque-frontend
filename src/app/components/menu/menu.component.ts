import { UsuarioDTO } from 'src/models/usuario.dto';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/domain/cart.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public user: UsuarioDTO;
  constructor(
    private cartService: CartService,
    private storage: StorageService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.hideMenu();
  }

  usuario() {
    if (this.storage.getLocalUser() == null) {
      return 'none';
    }
    const usr = this.storage.getLocalUser().email;

    const pos = usr.indexOf('@');
    return usr.substring(0, pos);

  }

  hideMenu() {
    if (this.storage.getLocalUser() == null) {
      return 'none';
    }
    const email = this.storage.getLocalUser().email;
    this.usuarioService.findByEmail(email).subscribe(
      response => {
        this.user = response as UsuarioDTO;
      }
    );

  }

  total() {
    return this.cartService.total();
  }
}
