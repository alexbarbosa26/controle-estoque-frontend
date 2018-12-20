import { CategoriasListComponent } from './components/categorias/categorias-list/categorias-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SitesComponent } from './components/sites/sites.component';

export const ROUTES: Routes =[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'categorias',component:CategoriasComponent},
    {path:'produto',component:ProdutoComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'sites',component:SitesComponent},
    {path:'categorias-list',component:CategoriasListComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);