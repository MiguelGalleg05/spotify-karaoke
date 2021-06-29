import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumsListComponent } from './artist-albums-list.component';

describe('ArtistAlbumsListComponent', () => {
  let component: ArtistAlbumsListComponent;
  let fixture: ComponentFixture<ArtistAlbumsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistAlbumsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
