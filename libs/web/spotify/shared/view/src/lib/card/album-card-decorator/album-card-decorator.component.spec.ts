import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardDecoratorComponent } from './album-card.component';

describe('AlbumCardComponent', () => {
  let component: AlbumCardDecoratorComponent;
  let fixture: ComponentFixture<AlbumCardDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumCardDecoratorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
