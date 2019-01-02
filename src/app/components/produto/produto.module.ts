import { ProdutoComponent } from './produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CategoriaService } from 'src/services/domain/categoria.service';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],

  providers:[
    CategoriaService
  ]
})
export class ProdutoModule { }
