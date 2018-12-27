import { routes } from './app.routes';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { SharedService } from 'src/services/shared.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.shared.showTemplate.subscribe(
      (show: boolean) => this.showTemplate = show
    );

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

  showContentWrapper() {
    if (this.auth.storage.getLocalUser() == null) {

    } else {
      return 'content-wrapper'
    }

  }

}

