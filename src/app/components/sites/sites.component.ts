import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario=this.formBuilder.group({
      nome:['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]]
    })
  }

  getFromGroupClass(isInvalid: boolean, isDirty: any): {} {
    return{
      'form-group':true,
      'has-error' : isInvalid && isDirty,
      'has-success' : !isInvalid && isDirty
    }
  }

}
