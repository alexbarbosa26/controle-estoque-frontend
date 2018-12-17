import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
import {ListboxModule} from 'primeng/listbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {DataGridModule} from 'primeng/datagrid';
import {CarouselModule} from 'primeng/carousel';
import {OrderListModule} from 'primeng/orderlist';
import {PickListModule} from 'primeng/picklist';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TreeModule} from 'primeng/tree';
import {ChartModule} from 'primeng/chart';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    ChartModule,
    TreeModule,
    PanelMenuModule,
    PickListModule,
    OrderListModule,
    CarouselModule,
    DataGridModule,
    TableModule,
    CalendarModule,
    PanelModule,
    DialogModule,
    RadioButtonModule,
    ListboxModule,
    PasswordModule,
    SplitButtonModule,
    DropdownModule,
    AutoCompleteModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
