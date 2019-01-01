import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  formulario : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
        nome: [''],
        quantidade: ['']

    })
  }

}
