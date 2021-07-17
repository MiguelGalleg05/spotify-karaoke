import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { CardModule } from './card/card.module';
import { InfiniteScrollModule } from './infinitive-scroll/infinite-scroll.module';
import { SongListModule } from './song-list/song-list.module';
import { UserMenuComponent } from './user-menu/user-menu.component';

const exportModules = [CardModule, InfiniteScrollModule, SongListModule];
const userMenu = [CommonModule, MatIconModule, MatMenuModule];

@NgModule({
  imports: [...exportModules, ...userMenu, RouterModule.forChild([])],
  declarations: [UserMenuComponent],
  exports: [...exportModules, UserMenuComponent],
})
export class WebSpotifySharedViewModule {}
