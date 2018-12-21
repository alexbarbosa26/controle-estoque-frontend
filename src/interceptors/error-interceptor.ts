
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/storage.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/api';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    msgs: Message[] = [];

    constructor(
        public storage: StorageService,
        private messageService: MessageService
    ) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch((error, caught) => {

                let errorObj = error;
                if(errorObj.error ){
                    errorObj = errorObj.error;
                }
                if(!errorObj.status){
                    errorObj = JSON.parse(errorObj);
                }

                console.log("Erro detectado pelo Interceptor");
                console.log(errorObj);

                switch(errorObj.status){
                    
                    case 403: this.handle403();
                    break;

                    case 401: this.handle401();
                    break;
                }

                return Observable.throw(error);
            }) as any;
    }

    handle403(){
        this.storage.setLocalUser(null);

    }

    handle401(){
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};