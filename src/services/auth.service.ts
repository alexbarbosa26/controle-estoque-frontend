import { CartService } from 'src/services/domain/cart.service';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from './../models/credencias.dto';
import { Injectable } from '@angular/core';
import { LocalUser } from '../models/local-user';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        public http: HttpClient,
        public storage: StorageService,
        private cartService: CartService
    ) { }

    authenticate(creds: CredenciaisDTO) {

        return this.http.post(`${API_CONFIG.baseURL}/login`,
            creds, {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseURL}/auth/refresh_token`,
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    forgot(email: string) {
        return this.http.post(
            `${API_CONFIG.baseURL}/auth/forgot`,
            email,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfullLogin(authorizationValue: string) {

        const tok = authorizationValue.substring(7);
        const user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        this.storage.setLocalUser(user);
        this.cartService.createOrClearCart();
    }

    logout() {
        this.storage.setLocalUser(null);
    }

}
