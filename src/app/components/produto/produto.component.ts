import { MessageService } from 'primeng/api';
import { CategoriaDTO } from './../../../models/categoria.dto';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/services/domain/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  formulario: FormGroup;
  categoria: CategoriaDTO[];

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private produtoService: ProdutoService) {

    this.formulario = this.formBuilder.group({
      nome: [null,[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
      quantidade: [null,[Validators.required]],
      codCategoria: [null,[Validators.required]]

    });
  }

  ngOnInit() {

    this.categoriaService.findAll().subscribe(
      response => {
        this.categoria = response;
        this.formulario.controls.codCategoria.setValue(null);
      }
    )
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return{
      'form-group':true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    }
  }

  salvar(){
    console.log(this.formulario.value);

    this.produtoService.insert(this.formulario.value).subscribe(
      response => {
        this.showInsertOk();
      },errors =>{}
    )
  }

  showInsertOk(){
    this.messageService.add({
      severity: 'success',
      summary: 'Produto cadastrado com sucesso !!!',
      detail: ''
    });

    this.formulario = this.formBuilder.group({
      nome: [null,[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
      quantidade: [null,[Validators.required]],
      codCategoria: [null,[Validators.required]]

    });
  }
}
