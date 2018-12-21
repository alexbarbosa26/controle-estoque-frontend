import { StorageService } from './../../../../services/storage.service';
import { LocalUser } from './../../../../models/local-user';
import { CredenciaisDTO } from './../../../../models/credencias.dto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
      },
        error => { }
      );
  }
  


}
