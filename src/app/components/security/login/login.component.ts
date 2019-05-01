import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  formSenha: FormGroup;
  shared: SharedService;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.shared = SharedService.getInstance();

    this.formSenha = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    });
  }

  ngOnInit() { }

  login() {
    this.spinner.show();
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.shared.showTemplate.emit(true);
        // window.location.reload();
        // this.router.navigate(['']);
        window.location.href = '';
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

  forgot() {
    console.log(this.formSenha.value)
    this.auth.forgot(this.formSenha.value).subscribe(
      response =>{
        this.showInsertOk();
      },
      error => {}
    )
  }

  showInsertOk() {
    this.messageService.add({
      severity: 'success',
      summary: 'E-mail solicitado com sucesso !!!',
      detail: ''
    });

    this.formSenha = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]

    });
  }

}
