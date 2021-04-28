import { Injectable } from '@angular/core';
export interface EnvInterface {
  production: boolean;
  ga: string;
  spotify_client_id: string;
  spotify_client_secret: string;
}

@Injectable({
  providedIn: 'root',
})
export class EnvSettingsService {
  protected env: EnvInterface;

  init(env: EnvInterface) {
    if (this.env === undefined) {
      this.env = env;
    }
  }

  get spotify_client_id(): string {
    return this.env.spotify_client_id;
  }

  get spotify_client_secret(): string {
    return this.env.spotify_client_secret;
  }

  get spotify_ga(): string {
    return this.env.ga;
  }
}
