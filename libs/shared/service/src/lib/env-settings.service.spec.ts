import { EnvInterface, EnvSettingsService } from './env-settings.service';

describe('EnvSettingsService', () => {
  const service = new EnvSettingsService();

  const env_value: EnvInterface = {
    ga: 'string',
    production: false,
    app_version: '1.0.0',
    spotify_client_id: 'client',
    spotify_client_secret: 'secret',
  };

  beforeEach(() => {
    service.init(env_value);
  });

  it('should have google analytics value', () => {
    expect(service.spotify_ga).toEqual(env_value.ga);
  });
  it('should have app version value', () => {
    expect(service.app_version).toEqual(env_value.app_version);
  });
  it('should have spotify client values', () => {
    expect(service.spotify_client_id).toEqual(env_value.spotify_client_id);
    expect(service.spotify_client_secret).toEqual(
      env_value.spotify_client_secret
    );
  });
});
