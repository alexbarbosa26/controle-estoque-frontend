import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { UsuarioDTO } from './../../models/usuario.dto';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService{

    constructor(
        public http: HttpClient,
        public storage: StorageService
    ){}

    findByEmail(email:string) : Observable<UsuarioDTO>{

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization':'Bearer ' +token})

        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseURL}/usuarios/email?value=${email}`,
        {'headers':authHeader});

    }

}