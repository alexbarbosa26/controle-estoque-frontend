import { SitesDTO } from 'src/models/sites.dto';
import { SitesService } from './../../../services/domain/sites.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario: FormGroup;
  sites: SitesDTO[];

  constructor(private formBuilder: FormBuilder,
    private sitesService: SitesService
    ) {
      this.formulario = this.formBuilder.group({
        matricula:[''],
        nome:[''],
        senha:[''],
        confirma:[''],
        email:[''],
        siteCod:['']
      });
     }

  ngOnInit() {

    this.sitesService.findAll().subscribe(
      response => {
        this.sites= response;
        this.formulario.controls.siteCod.setValue(this.sites[0].codigo);
      });
  }

}
