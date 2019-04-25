import { ProdutoComponent } from './produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { ListProdutoComponent } from './list-produto/list-produto.component';

@NgModule({
  declarations: [ProdutoComponent, ProdutoDetailsComponent, ListProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],

  providers:[
    CategoriaService
  ]
})
export class ProdutoModule { }
