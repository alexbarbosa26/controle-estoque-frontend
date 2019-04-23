import { CelulasService } from 'src/services/domain/celulas.service';
import { StorageService } from 'src/services/storage.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { SitesDTO } from 'src/models/sites.dto';
import { ClienteDTO } from 'src/models/cliente.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-celulas',
  templateUrl: './celulas.component.html',
  styleUrls: ['./celulas.component.css']
})
export class CelulasComponent implements OnInit {

  public formulario: FormGroup;
  public listCliente: ClienteDTO[];
  public codSites: SitesDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private usuarioService: UsuarioService,
    private storage: StorageService,
    private celulaService: CelulasService,
    private messageService: MessageService
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      pep: ['00000-00'],
      cliente_cod: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.buscarClientes();
  }

  salvar() {
    this.celulaService.insert(this.formulario.value).subscribe(
      response => {
        this.showInsertOk();
      }
    );
  }

  buscarClientes() {
    const user = this.storage.getLocalUser();
    this.usuarioService.findByEmail(user.email).subscribe(
      response => {
        this.codSites = response['site'];

        const sites: any = this.codSites.map(x => x.codigo);
        this.clienteService.findByClienteAndSiteAndSituacao(sites).subscribe(
          resp => {
            this.listCliente = resp;
          }
        );

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
      summary: 'Célula cadastrada e associado ao cliente com sucesso !!!',
      detail: ''
    });

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      pep: ['00000-00'],
      cliente_cod: ['', [Validators.required]]
    });
  }

}
