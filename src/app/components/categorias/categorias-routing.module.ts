import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { CategoriasComponent } from './categorias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: CategoriasComponent},
  {path: 'categoriasList', component: CategoriasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
