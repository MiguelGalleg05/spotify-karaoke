import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'albums', component: SearchAlbumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
