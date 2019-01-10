import { ProdutoService } from 'src/services/domain/produto.service';
import { routes } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/security/login/login.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SitesComponent } from './components/sites/sites.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CategoriasListComponent } from './components/categorias/categorias-list/categorias-list.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {KeyFilterModule} from 'primeng/keyfilter';


import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from './../services/storage.service';
import { UsuarioService } from '../services/domain/usuario.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { SharedService } from 'src/services/shared.service';
import { AuthGuard } from 'src/services/auth.guard';
import { SitesService } from 'src/services/domain/sites.service';
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';

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
    SitesComponent,
    CategoriasListComponent,
    ProfileComponent,
    ProdutoDetailsComponent
    
    
  ],
  imports: [
    routes,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CarouselModule,
    KeyFilterModule
        
  ],
  providers: [
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    UsuarioService,
    MessageService,
    SharedService,
    AuthGuard,
    SitesService,
    ProdutoService
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
