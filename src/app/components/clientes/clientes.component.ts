import { SitesService } from 'src/services/domain/sites.service';
import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formulario: FormGroup;
  public sitesData: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;

  constructor(
    private formBuilder: FormBuilder,
    private sitesService: SitesService,
    private messageService: MessageService,
  ) {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]]
    });
  }

  ngOnInit() {

    this.sitesService.findAll().subscribe(
      response => {
        const sites = response;
        this.sitesData = sites.map(x => ({id: x.codigo, text: x.nome}));
      }
    );
    this.value = ['JBT'];

    this.options = {
      multiple: true
    };
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
      summary: 'Produto cadastrado com sucesso !!!',
      detail: ''
    });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      quantidade: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
      codCategoria: [null, [Validators.required]],
      codSite: [null, [Validators.required]]

    });
  }
}
