import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  {path:'',component:ProdutoComponent},
  {path:'produto-details',component:ProdutoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
