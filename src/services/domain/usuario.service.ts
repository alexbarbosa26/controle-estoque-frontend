import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { UsuarioDTO } from './../../models/usuario.dto';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService{

    constructor(
        public http: HttpClient,
        public storage: StorageService
    ){}

    findById(codigo:any){
        return this.http.get(`${API_CONFIG.baseURL}/usuarios/${codigo}`);

    }

    findByEmail(email:string){
        return this.http.get(`${API_CONFIG.baseURL}/usuarios/email?value=${email}`);

    }

    insert(obj: UsuarioDTO){
        return this.http.post(`${API_CONFIG.baseURL}/usuarios`,        
        obj,{
            observe: 'response',
            responseType: 'text'
        });
    }

}