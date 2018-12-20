import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SitesComponent } from './components/sites/sites.component';
import { CategoriaService } from '../services/domain/categoria.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CategoriasComponent,
    ProdutoComponent,
    UsuarioComponent,
    SitesComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule    
  ],
  providers: [
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
