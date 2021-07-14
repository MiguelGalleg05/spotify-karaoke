import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCardDecoratorComponent } from './playlist-card-decorator.component';

describe('PlaylistCardDecoratorComponent', () => {
  let component: PlaylistCardDecoratorComponent;
  let fixture: ComponentFixture<PlaylistCardDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistCardDecoratorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCardDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
