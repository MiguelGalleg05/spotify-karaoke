import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchComponent } from './search/search.component';
import { SearchPlaylistComponent } from './search-playlist/search-playlist.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'albums', component: SearchAlbumComponent },
  { path: 'playlists', component: SearchPlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
