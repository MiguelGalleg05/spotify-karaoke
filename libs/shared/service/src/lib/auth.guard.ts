import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  readonly public_routes = ['/login', '/spotify'];

  constructor(protected router: Router, protected authStore: AuthStore) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url in this.public_routes || this.authStore.isLogged()) {
      return true;
    }
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
