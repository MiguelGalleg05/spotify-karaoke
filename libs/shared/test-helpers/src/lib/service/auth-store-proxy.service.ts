import { Injectable } from '@angular/core';

import { AuthStore, SpotifyTokenResponse } from '@artur-ba/shared/service';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreProxy extends AuthStore {
  tokenData = {
    access_token: 'token',
    token_type: 'token',
    scope: 'token',
    expires_in: 100,
    refresh_token: 'token',
  } as SpotifyTokenResponse;

  saveTokenDataProxy(tokenData?) {
    tokenData = tokenData || this.tokenData;
    this.saveTokenData(tokenData);
  }
}
