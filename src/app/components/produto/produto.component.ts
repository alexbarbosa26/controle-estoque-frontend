import { ProdutoDTO } from 'src/models/produto.dto';
import { MessageService } from 'primeng/api';
import { CategoriaDTO } from './../../../models/categoria.dto';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/services/domain/produto.service';
import {SelectItem} from 'primeng/api';
import { StorageService } from 'src/services/storage.service';
import { UsuarioService } from 'src/services/domain/usuario.service';
import { SitesDTO } from 'src/models/sites.dto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  formulario: FormGroup;
  categoria: CategoriaDTO[];
  produtos: SelectItem[];
  selectedPro: string;
  codSites: SitesDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private produtoService: ProdutoService,
    private storage: StorageService,
    private usuarioService: UsuarioService
    ) {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      quantidade: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
      codCategoria: [null, [Validators.required]],
      codSite: [null, [Validators.required]]
    });

    this.produtos = [
      {label: 'felitron_inferior_usb', value: 'felitron_inferior_usb'},
      {label: 'felitron_inferior_rj', value: 'felitron_inferior_rj'},
      {label: 'felitron_superior', value: 'felitron_superior'},
      {label: 'monitor_dell_19', value: 'monitor_dell_19'},
      {label: 'monitor_dell_17', value: 'monitor_dell_17'},
      {label: 'monitor_hp_19', value: 'monitor_hp_19'},
      {label: 'cpu_dell_3010', value: 'cpu_dell_3010'},
      {label: 'cpu_dell_390', value: 'cpu_dell_390'},
      {label: 'cpu_dell_380', value: 'cpu_dell_380'},
      {label: 'cpu_dell_3020', value: 'cpu_dell_3020'},
      {label: 'cpu_dell_320', value: 'cpu_dell_320'},
      {label: 'teclado_usb', value: 'teclado_usb'},
      {label: 'mouse_usb', value: 'mouse_usb'},
      {label: 'hd', value: 'hd'},
      {label: 'cabo_forca', value: 'cabo_forca'},
      {label: 'memoria_ram', value: 'memoria_ram'},
      {label: 'aparelho_avaya', value: 'aparelho_avaya'},
      {label: 'switch', value: 'switch'},
      {label: 'switch_core', value: 'switch_core'},
      {label: 'felitron_completo', value: 'felitron_completo'},
      {label: 'conector_rj_45', value: 'conector_rj_45'},
      {label: 'conector_rj_9', value: 'conector_rj_9'},
      {label: 'fonte_pc', value: 'fonte_pc'},
      {label: 'lacres_aco', value: 'lacres_aco'},
      {label: 'lacres_plastico', value: 'lacres_plastico'},
      {label: 'cabo_de_rede', value: 'cabo_de_rede'},
      {label: 'monitor_dell_18.5', value: 'monitor_dell_18.5'},
      {label: 'aio_positivo', value: 'aio_positivo'},
      {label: 'aio_lenovo', value: 'aio_lenovo'}
  ];
  }

  ngOnInit() {

    this.categoriaService.findAll().subscribe(
      response => {
        this.categoria = response;
        this.formulario.controls.codCategoria.setValue(null);
      }
    );

    const user = this.storage.getLocalUser();
    this.usuarioService.findByEmail(user.email).subscribe(
      response => {
        this.codSites = response['site'];

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

  salvar() {
    console.log(this.formulario.value);

    this.produtoService.insert(this.formulario.value).subscribe(
      response => {
        this.showInsertOk();
      }, errors => { }
    );
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
