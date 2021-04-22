import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsTextComponent } from './lyrics-text.component';

describe('LyricsTextComponent', () => {
  let component: LyricsTextComponent;
  let fixture: ComponentFixture<LyricsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LyricsTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
