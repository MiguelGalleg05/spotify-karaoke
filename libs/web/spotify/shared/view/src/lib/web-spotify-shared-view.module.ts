import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardModule } from './card/card.module';
import { InfiniteScrollModule } from './infinitive-scroll/infinite-scroll.module';
import { SongListModule } from './song-list/song-list.module';
import { UserMenuModule } from './user-menu/user-menu.module';

const exportModules = [
  CardModule,
  InfiniteScrollModule,
  SongListModule,
  UserMenuModule,
];

@NgModule({
  imports: [...exportModules, RouterModule.forChild([])],
  exports: [...exportModules],
})
export class WebSpotifySharedViewModule {}
