import { FormGroup, FormBuilder } from '@angular/forms';
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
      nome:['']
    })
  }

}
