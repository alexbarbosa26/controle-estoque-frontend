import { Component, OnInit } from '@angular/core';
import { CategoriaDTO } from '../../../../models/categoria.dto';
import { CategoriaService } from '../../../../services/domain/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})
export class CategoriasListComponent implements OnInit {

  items: CategoriaDTO[]

  constructor(
    public  categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response =>{
      this.items = response;
      console.log(response);
    },
    error => {});
  }

  ionViewDidLoad(){
    
  }

}
