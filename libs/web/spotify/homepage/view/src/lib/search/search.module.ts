import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';
import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';

import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchComponent } from './search/search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchPlaylistComponent } from './search-playlist/search-playlist.component';
import { SearchRoutingModule } from './search.routing';
import { SearchTrackComponent } from './search-track/search-track.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchAlbumComponent,
    SearchInputComponent,
    SearchPlaylistComponent,
    SearchTrackComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    WebSpotifySharedViewModule,
    WebSpotifySharedDirectivesModule,

    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class SearchModule {}
