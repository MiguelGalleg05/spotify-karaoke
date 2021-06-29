import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractLIstComponent } from './abstract-list.component';

describe('AbstractLIstComponent', () => {
  let component: AbstractLIstComponent;
  let fixture: ComponentFixture<AbstractLIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractLIstComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
