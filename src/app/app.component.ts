import { Component } from '@angular/core';

import {ConfirmationService} from 'primeng/api';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
export class AppComponent {
  msgs: Message[] = [];
    
  constructor(private messageService: MessageService) {this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: ['#42A5F5','#42A5F6','#42A5F7','#42A5F8'],
            hoverBackgroundColor: ['#42A5F5','#42A5F6','#42A5F7','#42A5F8'],
            borderColor: '#1E88E5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: ['#9CCC65','#9CCC66','#9CCC67','#9CCC68'],
            hoverBackgroundColor: ['#9CCC65','#9CCC66','#9CCC67','#9CCC68'],
            borderColor: '#7CB342',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
}
}

  data: any;

      
  showSuccess() {
      this.msgs = [];
      this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showInfo() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }

  showWarn() {
      this.msgs = [];
      this.msgs.push({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
  }

  showError() {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  showMultiple() {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Message 1', detail:'PrimeNG rocks'});
      this.msgs.push({severity:'info', summary:'Message 2', detail:'PrimeUI rocks'});
      this.msgs.push({severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'});
  }
  
  showViaService() {
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  clear() {
      this.msgs = [];
  }
}
