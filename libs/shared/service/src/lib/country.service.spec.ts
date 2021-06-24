import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CountryService } from './country.service';

describe('UserSettingsService', () => {
  let service: CountryService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
    service = injector.inject(CountryService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('when api available', () => {
    const returnCountryCode = 'xx';
    it('should return a value after request', () => {
      service.getUserCountry().then((countryCode) => {
        expect(countryCode).toEqual(returnCountryCode);
      });
      httpMock.expectOne(() => true).flush({ countryCode: returnCountryCode });
    });

    it('should call api only once and save the response', () => {
      service
        .getUserCountry()
        .then((countryCode) => {
          expect(countryCode).toEqual(returnCountryCode);
        })
        .then(() => {
          service.getUserCountry().then((countryCode) => {
            expect(countryCode).toEqual(returnCountryCode);
          });
        });
      httpMock.expectOne(() => true).flush({ countryCode: returnCountryCode });
    });
  });
  it('should return a default value if api unavailable', () => {
    service.getUserCountry().then((countryCode) => {
      expect(countryCode).toEqual(service.countryCodeDefault);
    });
    httpMock.expectOne(() => true).error(new ErrorEvent('400'));
  });
});
