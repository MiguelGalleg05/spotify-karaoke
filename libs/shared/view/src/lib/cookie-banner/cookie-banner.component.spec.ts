import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CookieBannerComponent } from './cookie-banner.component';

describe('CookieBannerComponent', () => {
  let component: CookieBannerComponent;
  let fixture: ComponentFixture<CookieBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookieBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event when button pressed', () => {
    jest.spyOn(component, 'handleCookiesAccept');

    const acceptButton = fixture.debugElement.query(By.css('button'));
    acceptButton.nativeElement.click();

    expect(component.handleCookiesAccept).toHaveBeenCalled();
  });
});
