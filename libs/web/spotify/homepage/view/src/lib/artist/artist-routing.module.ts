import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
  { path: ':uri', component: ArtistComponent },
  { path: ':uri/albums', component: ArtistAlbumsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistRoutingModule {}
