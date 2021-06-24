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
  protected countryCode = null;
  protected readonly countryUrl = 'http://ip-api.com/json';

  async getUserCountry(): Promise<string> {
    if (this.countryCode === null) {
      this.countryCode = await this.getNewUserCountry();
    }
    return this.countryCode;
  }

  protected async getNewUserCountry(): Promise<string> {
    try {
      const response = await this.httpClient
        .get<CountryResponse>(this.countryUrl)
        .toPromise();
      return response.countryCode;
    } catch {
      return this.countryCodeDefault;
    }
  }
}
