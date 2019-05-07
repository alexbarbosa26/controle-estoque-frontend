import { FieldMessage } from './../../../../models/fieldmessage';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  formLogin: FormGroup;
  formSenha: FormGroup;
  shared: SharedService;
  erros: FieldMessage[];

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.shared = SharedService.getInstance();

    this.formSenha = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });

    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.refreshTokenUser();
  }

  login() {
    this.spinner.show();
    this.auth.authenticate(this.formLogin.value)
      .subscribe(response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
        this.shared.showTemplate.emit(true);
       // window.location.reload();
       // this.router.navigate(['/']);
        window.location.href = '';
      },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Acesso negado ou sem conexão com o Banco de dados.',
            detail: ''
          });
        });

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

  }


  refreshTokenUser() {
    if (this.auth.storage.getLocalUser() !== null) {
      this.auth.refreshToken()
        .subscribe(response => {
          this.auth.successfullLogin(response.headers.get('Authorization'));
          this.shared.showTemplate.emit(true);
          this.router.navigate(['']);

        },
          error => {
            this.shared.showTemplate.emit(false);
            this.router.navigate(['login']);
          });
    }
  }

  forgot() {
    this.auth.forgot(this.formSenha.value).subscribe(
      response => {
        this.showInsertOk();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Email não encontrado!',
          detail: ''
        });

      }
    );
  }


  showInsertOk() {
    this.messageService.add({
      severity: 'success',
      summary: 'Senha solicitada com sucesso !!!',
      detail: ''
    });

    this.formSenha = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]

    });
  }

}
