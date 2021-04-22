import { TestBed } from '@angular/core/testing';

import { StateInterface } from './state-interface';

interface Foo {
  a: string;
}
describe('StateInterface', () => {
  let service: StateInterface<Foo>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateInterface);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
