import { TestBed } from '@angular/core/testing';

import { EnvSettingsService } from './env-settings.service';

describe('EnvSettingsService', () => {
  let service: EnvSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
