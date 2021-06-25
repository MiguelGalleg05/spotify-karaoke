import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { SharedViewModule } from '@artur-ba/shared/view';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { AlbumCardComponent } from './album-card/album-card.component';
import { CardComponent } from './card/card.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongRowComponent } from './song-row/song-row.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    WebSpotifySharedPipeModule,
    SharedViewModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    SongRowComponent,
    SongListComponent,
    UserMenuComponent,
    CardComponent,
    AlbumCardComponent,
  ],
  exports: [
    SongListComponent,
    UserMenuComponent,
    CardComponent,
    AlbumCardComponent,
  ],
})
export class WebSpotifySharedViewModule {}
