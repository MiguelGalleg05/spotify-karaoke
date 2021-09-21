import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { LanguageModel } from './models/language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  protected languages: LanguageModel[];

  protected readonly defaultLanguages: LanguageModel[] = [
    { langCode: 'en', name: 'English' },
  ];
  protected readonly netlify_lang = 'nl_lang';
  protected readonly languages_json = 'languages.json';
  protected readonly true_str = 'true';
  protected readonly cookieMaxAge = 365 * 24 * 60 * 60;

  constructor(
    protected readonly http: HttpClient,
    protected readonly cookie: CookieService,
  ) {}

  initLanguages(): Promise<void> {
    if (this.languages === undefined) {
      return this.http
        .get(this.languages_json)
        .toPromise()
        .then((langs: LanguageModel[]) => {
          if (langs[0]) {
            this.languages = langs;
          } else {
            this.languages = this.defaultLanguages;
          }
        });
    }
    return Promise.resolve();
  }

  getLanguages(): LanguageModel[] {
    return this.languages;
  }

  getCurrentLanguage(): LanguageModel {
    return this.languages.filter(
      (lang) => lang.langCode === this.getLanguageCodeCookie(),
    )[0];
  }

  setLanguage({ langCode }: LanguageModel): void {
    this.cookie.set(
      this.netlify_lang,
      langCode,
      this.cookieMaxAge,
      '/',
      window.location.hostname,
      false,
      'Strict',
    );
  }

  protected getLanguageCodeCookie(): string {
    return this.cookie.get(this.netlify_lang) || 'en';
  }
}
