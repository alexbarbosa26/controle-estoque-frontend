import { SitesService } from 'src/services/domain/sites.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private siteService: SitesService,
    private messageService: MessageService
    ) {
      this.formulario=this.formBuilder.group({
        nome:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
      })
     }

  ngOnInit() {
    
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return{
      'form-group':true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    }
  }

  salvar(){
    this.siteService.insert(this.formulario.value).subscribe(
      response => {
        this.showInsertOk();
    },errors => {})
  }

  showInsertOk(){
    this.messageService.add({
      severity: 'success',
      summary: 'Site cadastrado com sucesso !!!',
      detail: ''
    });

    this.formulario = this.formBuilder.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }


}
