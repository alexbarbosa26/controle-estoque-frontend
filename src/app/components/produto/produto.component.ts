import { CategoriaDTO } from './../../../models/categoria.dto';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    private categoriaService: CategoriaService) {

    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
      quantidade: ['',[Validators.required]],
      categoriaCod: ['',[Validators.required]]

    });
  }

  ngOnInit() {

    this.categoriaService.findAll().subscribe(
      response => {
        this.categoria = response;
        this.formulario.controls.categoriaCod.setValue(this.categoria[0].codigo);
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
}
