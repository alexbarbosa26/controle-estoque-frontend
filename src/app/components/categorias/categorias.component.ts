import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    });
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

}
