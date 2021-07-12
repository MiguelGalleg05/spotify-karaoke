import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndefiniteScrollComponent } from './indefinite-scroll.component';

describe('IndefiniteScrollComponent', () => {
  let component: IndefiniteScrollComponent;
  let fixture: ComponentFixture<IndefiniteScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndefiniteScrollComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndefiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
