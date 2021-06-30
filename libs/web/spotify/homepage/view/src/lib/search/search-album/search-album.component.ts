import { Component, ViewChild } from '@angular/core';
import { SearchAlbumListComponent } from './search-album-list/search-album-list.component';

@Component({
  selector: 'artur-ba-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss'],
})
export class SearchAlbumComponent {
  @ViewChild(SearchAlbumListComponent)
  searchAlbumList: SearchAlbumListComponent;

  search() {
    this.searchAlbumList?.ngOnInit();
  }
}
