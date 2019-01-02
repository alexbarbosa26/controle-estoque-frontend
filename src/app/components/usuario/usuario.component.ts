import { SitesDTO } from 'src/models/sites.dto';
import { SitesService } from './../../../services/domain/sites.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/interceptors/must-match.validator';

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
        matricula:['',[Validators.required]],
        nome:['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
        senha:['',[Validators.required,Validators.minLength(8)]],
        confirma:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        siteCod:['',[Validators.required]]
      },{
        validator: MustMatch('senha','confirma')
      });
     }

  ngOnInit() {

    this.sitesService.findAll().subscribe(
      response => {
        this.sites= response;
        this.formulario.controls.siteCod.setValue(this.sites[0].codigo);
      });
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return{
      'form-group has-feedback':true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    }
  }

}
