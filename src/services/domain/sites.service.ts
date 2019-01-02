import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { SitesDTO } from 'src/models/sites.dto';

@Injectable()
export class SitesService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<SitesDTO[]> {
        return this.http.get<SitesDTO[]>(`${API_CONFIG.baseURL}/sites`);
    }
}