import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let httpMock: HttpTestingController;
  const languageJson = [{ langCode: 'en', name: 'English' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LanguageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get language json', fakeAsync(() => {
    service.initLanguages();
    httpMock.expectOne(() => true).flush(languageJson);
    tick();

    expect(service.getLanguages().length).toEqual(1);
  }));

  it('should get default one lang if error while getting languages', fakeAsync(() => {
    service.initLanguages();
    httpMock.expectOne(() => true).flush({});
    tick();

    expect(service.getLanguages().length).toEqual(1);
  }));
});
