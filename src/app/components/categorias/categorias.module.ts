import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasComponent } from './categorias.component';

@NgModule({
  declarations: [CategoriasComponent, CategoriasListComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
