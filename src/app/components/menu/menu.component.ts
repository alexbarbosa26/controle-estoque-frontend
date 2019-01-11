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

  usuario: UsuarioDTO;
  
  constructor(
    private cartService: CartService,
    private storage: StorageService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response;

        },
          error => {
            if (error.status == 403) {
              this.router.navigate(['login']);
            }
          });
    } else {
      this.router.navigate(['login']);
    }
  }

  total(){
    return this.cartService.total();
  }
}
