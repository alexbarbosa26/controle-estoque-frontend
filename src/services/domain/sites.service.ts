import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { SitesDTO } from 'src/models/sites.dto';

@Injectable()
export class SitesService {

    constructor(public http: HttpClient) {

    }

    findAll(): Observable<SitesDTO[]> {
        return this.http.get<SitesDTO[]>(`${API_CONFIG.baseURL}/sites`);
    }

    insert(obj: SitesDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/sites`,
        obj, {
            observe: 'response',
            responseType: 'text'
        });
    }
}
