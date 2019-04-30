import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
    private storage: StorageService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.spinner.show();

    this.signout();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

  }

  signout(): void {
    // window.location.reload();
    this.storage.setLocalUser(null);
    // this.router.navigate(['login']);
    window.location.href = '';
  }

}
