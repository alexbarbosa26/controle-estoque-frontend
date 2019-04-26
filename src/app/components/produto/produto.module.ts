import { ProdutoComponent } from './produto.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { EditPodutosComponent } from './edit-podutos/edit-podutos.component';

@NgModule({
  declarations: [ProdutoComponent, ProdutoDetailsComponent, EditPodutosComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  providers: [
    CategoriaService
  ]
})
export class ProdutoModule { }
