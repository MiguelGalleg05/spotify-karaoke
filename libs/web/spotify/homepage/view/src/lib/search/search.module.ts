import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';

import { SearchAlbumComponent } from './search-album/search-album.component';
import { SearchAlbumListComponent } from './search-album/search-album-list/search-album-list.component';
import { SearchComponent } from './search/search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchAlbumComponent,
    SearchInputComponent,
    SearchAlbumListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    WebSpotifySharedViewModule,

    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class SearchModule {}
