import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageResolver implements Resolve<boolean> {
  constructor(protected readonly languageService: LanguageService) {}

  async resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Promise<boolean> {
    return this.languageService.initLanguages().then(() => true);
  }
}
