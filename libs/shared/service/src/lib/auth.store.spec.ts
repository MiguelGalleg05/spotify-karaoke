import { TestBed } from '@angular/core/testing';

import { AuthStore } from './auth.store';

xdescribe('AuthStateService', () => {
  let service: AuthStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
