import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ProdutoDetailsComponent } from './components/produto/produto-details/produto-details.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CelulasComponent } from './components/celulas/celulas.component';
import { PickClientesComponent } from './components/clientes/pick-clientes/pick-clientes.component';
import { SignOutComponent } from './components/security/sign-out/sign-out.component';
import { EditProdutosComponent } from './components/produto/edit-produtos/edit-produtos.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';
import { StorageService } from './../services/storage.service';
import { UsuarioService } from '../services/domain/usuario.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { SharedService } from 'src/services/shared.service';
import { AuthGuard } from 'src/services/auth.guard';
import { SitesService } from 'src/services/domain/sites.service';
import { CartService } from 'src/services/domain/cart.service';
import { ProdutoService } from 'src/services/domain/produto.service';
import { TrocaService } from 'src/services/domain/troca.service';
import { DashboardService } from 'src/services/domain/dashboard.service';
import { CelulasService } from 'src/services/domain/celulas.service';
import { ClienteService } from 'src/services/domain/cliente.service';

enableProdMode();
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
    ProdutoDetailsComponent,
    CartComponent,
    OrderConfirmationComponent,
    ClientesComponent,
    CelulasComponent,
    PickClientesComponent,
    EditProdutosComponent,
    SignOutComponent


  ],
  imports: [
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
    KeyFilterModule,
    DataViewModule,
    PanelModule,
    NgxSpinnerModule,
    CardModule,
    ChartModule,
    ListboxModule,
    DropdownModule,
    InputTextModule

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
    ProdutoService,
    CartService,
    TrocaService,
    DashboardService,
    ClienteService,
    CelulasService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
