import { Message } from 'primeng/components/common/api';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/storage.service';
import { MessageService } from 'primeng/api';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        public storage: StorageService,
        private messageService: MessageService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.messageService.clear();
        return next.handle(req)
            .catch((error, caught) => {

                let errorObj = error;
                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if (!errorObj.status) {
                    errorObj = JSON.parse(errorObj);
                }

                console.log("Erro detectado pelo Interceptor");
                console.log(errorObj);

                switch (errorObj.status) {

                    case 403: this.handle403();
                        break;

                    case 401: this.handle401();
                        break;

                    case 404: this.handle404();
                        break;

                    default:
                        this.handleDefaultError(errorObj);
                }

                return Observable.throw(error);
            }) as any;
    }

    handle403() {
        this.storage.setLocalUser(null);
        this.messageService.add({
            severity: 'error',
            summary: 'Erro 403: Acesso negado',
            detail: 'Você não possui permissão para este acesso'
        });

    }

    handle401() {

        this.messageService.add({
            severity: 'error',
            summary: 'Erro 401: falha de autenticação',
            detail: 'Email ou senha incorretos'
        });
    }

    handle404() {
        this.messageService.add({
            severity: 'error',
            summary: 'Erro 404: página não encontrada',
            detail: ''
        });
    }

    handleDefaultError(errorObj: { status: string; error: string; message: string; }) {

        this.messageService.add({
            severity: 'error',
            summary: 'Erro ' + errorObj.status + ': ' + errorObj.error,
            detail: errorObj.message
        });
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};