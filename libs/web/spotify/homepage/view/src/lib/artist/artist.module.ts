import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';

import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { ArtistAlbumsListComponent } from './artist-albums/artist-albums-list/artist-albums-list.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistRoutingModule } from './artist-routing.module';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistAlbumsComponent,
    ArtistAlbumsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtistRoutingModule,
    WebSpotifySharedViewModule,
  ],
})
export class ArtistModule {}
