import { SitesService } from 'src/services/domain/sites.service';
import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClienteService } from 'src/services/domain/cliente.service';
import { SitesDTO } from 'src/models/sites.dto';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public formulario: FormGroup;
  public sitesData: SitesDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private sitesService: SitesService,
    private messageService: MessageService,
    private clienteService: ClienteService
  ) {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
      situacao: [1],
      site_cod: [null, [Validators.required]]
    });
  }

  ngOnInit() {

    this.sitesService.findAll().subscribe(
      response => {
        this.sitesData = response;
      }
    );
  }

  salvar() {
    console.log(this.formulario.value);
    this.clienteService.insert(this.formulario.value).subscribe(
      response => {
        this.showInsertOk();
      }
    );
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

  showInsertOk() {
    this.messageService.add({
      severity: 'success',
      summary: 'Cliente cadastrado com sucesso !!!',
      detail: ''
    });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
      situacao: [1],
      site_cod: [null, [Validators.required]]

    });
  }
}
