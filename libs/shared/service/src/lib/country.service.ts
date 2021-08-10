import { filter, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// this interface is partial with more important fields only.
interface CountryResponse {
  countryCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(protected readonly httpClient: HttpClient) {}

  readonly countryCodeDefault = 'gb';
  protected countryCode$ = new BehaviorSubject<string>(null);
  protected isInitialized = false;
  protected readonly countryUrl = 'http://ip-api.com/json';

  async getUserCountry(): Promise<string> {
    return this.isInitialized
      ? this.getInitCountryCode()
      : this.initCountryCode();
  }

  protected async initCountryCode(): Promise<string> {
    this.isInitialized = true;
    await this.getNewUserCountry();
    return this.countryCode$.value;
  }

  protected async getInitCountryCode(): Promise<string> {
    await this.countryCode$
      .pipe(
        filter((c) => c !== null),
        take(1),
      )
      .toPromise();
    return this.countryCode$.value;
  }

  protected async getNewUserCountry(): Promise<string> {
    try {
      const response = await this.httpClient
        .get<CountryResponse>(this.countryUrl)
        .toPromise();
      this.countryCode$.next(response.countryCode);
      return;
    } catch {
      this.countryCode$.next(this.countryCodeDefault);
      return this.countryCodeDefault;
    }
  }
}
