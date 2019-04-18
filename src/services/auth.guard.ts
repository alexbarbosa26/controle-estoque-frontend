// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(
    public storage: StorageService,
    public router: Router
) {

}

    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | boolean {
            if (this.storage.getLocalUser() != null) {
                return true;
            }
            this.router.navigate(['/login']);
            return false;
    }
}
