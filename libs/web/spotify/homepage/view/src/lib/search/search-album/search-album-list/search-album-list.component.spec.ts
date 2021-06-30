import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlbumLIstComponent } from './search-album-list.component';

describe('SearchAlbumLIstComponent', () => {
  let component: SearchAlbumLIstComponent;
  let fixture: ComponentFixture<SearchAlbumLIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAlbumLIstComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlbumLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
