import { StorageService } from './../../../services/storage.service';
import { LocalUser } from './../../../models/local-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: string;

  constructor(
    public storage: StorageService
  ) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.email=localUser.email;
    }
  }

}
