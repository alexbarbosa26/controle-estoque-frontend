import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriaDTO } from './../../../models/categoria.dto';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/services/domain/produto.service';
import { SelectItem } from 'primeng/api';
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
      {label: 'hp_prodesk600', value: 'hp_prodesk600'},
      {label: 'positivo_d100', value: 'positivo_d100'},
      {label: 'positivo_d360', value: 'positivo_d360'},
      {label: 'positivo_d', value: 'positivo_d'},
      {label: 'teclado_usb', value: 'teclado_usb'},
      {label: 'mouse_usb', value: 'mouse_usb'},
      {label: 'teclado_ps2', value: 'teclado_ps2'},
      {label: 'mouse_ps2', value: 'mouse_ps2'},
      {label: 'hd', value: 'hd'},
      {label: 'hd_mini', value: 'hd_mini'},
      {label: 'cabo_forca', value: 'cabo_forca'},
      {label: 'memoria_ram', value: 'memoria_ram'},
      {label: 'aparelho_avaya_4602sw', value: 'aparelho_avaya_4602sw'},
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
      {label: 'aio_lenovo', value: 'aio_lenovo'},
      {label: 'felitron_completo_rj', value: 'felitron_completo_rj'},
      {label: 'felitron_cabo_treinamento', value: 'felitron_cabo_treinamento'},
      {label: 'adaptador_antigo_para_novo', value: 'adaptador_antigo_para_novo'},
      {label: 'toner_xerox_3325', value: 'toner_xerox_3325'},
      {label: 'toner_xerox_3635', value: 'toner_xerox_3635'},
      {label: 'toner_xerox_4600_metered', value: 'toner_xerox_4600_metered'},
      {label: 'cilindro_xerox_4600', value: 'cilindro_xerox_4600'},
      {label: 'cera_xerox_ciano_8900', value: 'cera_xerox_ciano_8900'},
      {label: 'cera_xerox_magenta_8900', value: 'cera_xerox_magenta_8900'},
      {label: 'cera_xerox_yellow_8900', value: 'cera_xerox_yellow_8900'},
      {label: 'cera_xerox_black_8900', value: 'cera_xerox_black_8900'},
      {label: 'coletora_xerox_residuos_8570', value: 'coletora_xerox_residuos_8570'},
      {label: 'kit_manutencao_xerox_8570', value: 'kit_manutencao_xerox_8570'},
      {label: 'cilindro_xerox_fotorreceptor', value: 'cilindro_xerox_fotorreceptor'},
      {label: 'toner_xerox_5500', value: 'toner_xerox_5500'},
      {label: 'cilindro_xerox_fotorreceptor_5500', value: 'cilindro_xerox_fotorreceptor_5500'},
      {label: 'kit_xerox_5500', value: 'kit_xerox_5500'},
      {label: 'cera_xerox_black_8570', value: 'cera_xerox_black_8570'},
      {label: 'cera_xerox_ciano_8570', value: 'cera_xerox_ciano_8570'},
      {label: 'cera_xerox_magenta_8570', value: 'cera_xerox_magenta_8570'},
      {label: 'cera_xerox_yellow_8570', value: 'cera_xerox_yellow_8570'},
      {label: 'cygnus_usb_completo', value: 'cygnus_usb_completo'}
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
