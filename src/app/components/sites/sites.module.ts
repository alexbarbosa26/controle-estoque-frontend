import { SitesComponent } from './sites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';

@NgModule({
  declarations: [SitesComponent],
  imports: [
    CommonModule,
    SitesRoutingModule
  ]
})
export class SitesModule { }
