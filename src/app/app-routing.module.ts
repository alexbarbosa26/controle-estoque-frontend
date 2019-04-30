import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from 'src/services/auth.guard';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CelulasComponent } from './components/celulas/celulas.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SitesComponent } from './components/sites/sites.component';
import { CategoriasListComponent } from './components/categorias/categorias-list/categorias-list.component';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/security/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { PickClientesComponent } from './components/clientes/pick-clientes/pick-clientes.component';
import { SignOutComponent } from './components/security/sign-out/sign-out.component';
import { EditProdutosComponent } from './components/produto/edit-produtos/edit-produtos.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard]},
{path: 'categorias', component: CategoriasComponent, canActivate: [AuthGuard]},
{path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
{path: 'celulas', component: CelulasComponent, canActivate: [AuthGuard]},
{path: 'produto', component: ProdutoComponent, canActivate: [AuthGuard]},
{path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
{path: 'sites', component: SitesComponent, canActivate: [AuthGuard]},
{path: 'categorias-list', component: CategoriasListComponent, canActivate: [AuthGuard]},
{path: 'produto-details/:categoria_id/:site_id', component: ProdutoDetailsComponent, canActivate: [AuthGuard]},
{path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent},
{path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
{path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: [AuthGuard]},
{path: 'pick-clientes/:troca', component: PickClientesComponent, canActivate: [AuthGuard]},
{path: 'edit-produtos', component: EditProdutosComponent, canActivate: [AuthGuard]},
{path: 'logout', component: SignOutComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
