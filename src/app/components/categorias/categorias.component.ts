import { CategoriaDTO } from './../../../models/categoria.dto';
import { CategoriaService } from './../../../services/domain/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  items: CategoriaDTO[]

  constructor(
    public  categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response =>{
      this.items = response;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  ionViewDidLoad(){
    
  }

}