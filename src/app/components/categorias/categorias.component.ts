import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService
    ) {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    });
  }

  ngOnInit() {
  }

  salvar() {
    this.categoriaService.insert(this.formulario.value).subscribe(
      () => {
        this.showInsertOk();
    }, () => {} );
  }

  showInsertOk() {
    this.messageService.add({
      severity: 'success',
      summary: 'Categoria cadastrada com sucesso !!!',
      detail: ''
    });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    });
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return{
      'form-group': true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    };
  }

}
