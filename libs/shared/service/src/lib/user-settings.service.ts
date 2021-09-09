import { Injectable } from '@angular/core';

import { filter, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { StateInterface } from './state-interface';
export class UserSettings {
  cookies_allowed = 'false';
  dark_mode = 'false';
  return_path?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService extends StateInterface<UserSettings> {
  protected readonly cookies_allowed = 'cookies_allowed';
  protected readonly dark_mode = 'dark_mode';
  protected readonly return_path = 'return_path';
  protected readonly true_str = 'true';
  protected readonly cookieMaxAge = 365 * 24 * 60 * 60;

  constructor(protected cookieService: CookieService) {
    super();
    const cookie_data = this.cookieService.getAll();
    this.setState({
      ...this.cookieService,
      ...cookie_data,
    } as UserSettings);
  }

  readonly darkModeOn$ = this.state$.pipe(
    filter((p) => p.dark_mode !== undefined),
    map((p) => p.dark_mode === this.true_str),
  ) as Observable<boolean>;

  readonly cookiesAccepted$ = this.state$.pipe(
    map((p) => p.cookies_allowed === this.true_str),
  ) as Observable<boolean>;

  allowCookies(): void {
    this.setCookie(this.cookies_allowed, this.true_str);
    this.setState({
      cookies_allowed: this.true_str,
    });
  }

  darkMode(isOn: boolean): void {
    const isOnStr = `${isOn}`;
    this.setState({
      dark_mode: isOnStr,
    });
    this.setCookie(this.dark_mode, isOnStr);
  }

  saveReturnPath(path: string): void {
    this.setCookie(this.return_path, path, 5 * 60);
  }

  getReturnPath(): string {
    let path = '';
    if (this.cookieService.check(this.return_path)) {
      path = this.cookieService.get(this.return_path);
      this.cookieService.delete(this.return_path);
    }
    return path;
  }

  protected setCookie(
    key: string,
    value: string,
    cookieMaxAge = this.cookieMaxAge,
  ): void {
    this.cookieService.set(
      key,
      value,
      cookieMaxAge,
      '/',
      window.location.hostname,
      false,
      'Strict',
    );
  }
}
