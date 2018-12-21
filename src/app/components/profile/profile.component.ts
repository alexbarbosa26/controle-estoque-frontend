import { UsuarioDTO } from './../../../models/usuario.dto';
import { StorageService } from './../../../services/storage.service';
import { LocalUser } from './../../../models/local-user';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/domain/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: UsuarioDTO;

  constructor(
    public storage: StorageService,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.usuarioService.findByEmail(localUser.email)
      .subscribe(response => {
        this.usuario = response;

      },
    error =>{});
    }
  }

}
