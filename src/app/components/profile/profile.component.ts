import { UsuarioDTO } from './../../../models/usuario.dto';
import { StorageService } from './../../../services/storage.service';
import { LocalUser } from './../../../models/local-user';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/domain/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: UsuarioDTO;

  constructor(
    public storage: StorageService,
    public usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response as UsuarioDTO;

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

}
