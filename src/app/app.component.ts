import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { SharedService } from 'src/services/shared.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []

})
export class AppComponent {

  showTemplate: boolean = false;
  public shared: SharedService;

  constructor(
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.spinner.show();

    this.shared.showTemplate.subscribe(
      (show: boolean) => this.showTemplate = show
    );

    this.refreshTokenUser();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }



  refreshTokenUser() {
    if (this.auth.storage.getLocalUser() != null) {
      this.auth.refreshToken()
        .subscribe(response => {
          this.auth.successfullLogin(response.headers.get('Authorization'));
          this.shared.showTemplate.emit(true);
          this.router.navigate(['/']);

        },
          error => {
            this.shared.showTemplate.emit(false);
            this.router.navigate(['/login']);
          });
    }
  }

  showContentWrapper() {
    if (this.auth.storage.getLocalUser() == null) {

    } else {
      return 'content-wrapper'
    }

  }
}

