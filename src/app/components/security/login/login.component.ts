import { StorageService } from './../../../../services/storage.service';
import { LocalUser } from './../../../../models/local-user';
import { CredenciaisDTO } from './../../../../models/credencias.dto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredenciaisDTO = {
    email: '',
    senha: ''
  };

  shared: SharedService;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() { }

  login() {
    this.spinner.show();
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.shared.showTemplate.emit(true);
        window.location.reload();
        this.router.navigate(['']);
      },
        error => {
          if (error.status === 403) {
          }
        });

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

  }

}
