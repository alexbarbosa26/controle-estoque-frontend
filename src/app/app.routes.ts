import { AppComponent } from './app.component';
import { AuthGuard } from './../services/auth.guard';
import { CategoriasListComponent } from './components/categorias/categorias-list/categorias-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SitesComponent } from './components/sites/sites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

export const ROUTES: Routes =[
    {path:'',component:HomeComponent, canActivate: [AuthGuard]},    
    {path:'categorias',component:CategoriasComponent, canActivate: [AuthGuard]},
    {path:'produto',component:ProdutoComponent, canActivate: [AuthGuard]},
    {path:'usuario',component:UsuarioComponent, canActivate: [AuthGuard]},
    {path:'sites',component:SitesComponent, canActivate: [AuthGuard]},
    {path:'categorias-list',component:CategoriasListComponent, canActivate: [AuthGuard]},
    {path:'produto-details/:categoria_id/:site_id',component:ProdutoDetailsComponent, canActivate: [AuthGuard]},
    {path:'profile',component:ProfileComponent, canActivate: [AuthGuard]},
    {path:'logout',component:AppComponent},
    {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent, canActivate: [AuthGuard]},
    {path:'order-confirmation/:troca',component:OrderConfirmationComponent, canActivate: [AuthGuard]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);