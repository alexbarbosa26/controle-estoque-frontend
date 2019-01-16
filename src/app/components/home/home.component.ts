import { MessageService } from 'primeng/components/common/messageservice';
import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }

  :host ::ng-deep .ui-message,
  :host ::ng-deep .ui-inputtext {
      margin-right: .25em;
  }
`],
    providers: [MessageService]
})
export class HomeComponent {

    constructor() {
        
    }

    data: any;


}
