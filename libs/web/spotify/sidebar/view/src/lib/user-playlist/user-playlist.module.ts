import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageModule } from '@artur-ba/web/spotify/shared/view';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { PlaylistInfinitiveListComponent } from './playlist-infinitive-list/playlist-infinitive-list.component';
import { PlaylistRowComponent } from './playlist-row/playlist-row.component';
import { UserPlaylistComponent } from './user-playlist/user-playlist.component';

const exports = [UserPlaylistComponent];

@NgModule({
  declarations: [
    ...exports,
    PlaylistRowComponent,
    PlaylistInfinitiveListComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    RouterModule.forChild([]),
    WebSpotifySharedPipeModule,
  ],
  exports,
})
export class UserPlaylistModule {}
