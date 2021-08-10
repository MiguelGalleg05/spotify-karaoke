import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardModule } from './card/card.module';
import { ImageModule } from './image/image.module';
import { LazyScrollModule } from './lazy-scroll/lazy-scroll.module';
import { SongListModule } from './song-list/song-list.module';
import { UserMenuModule } from './user-menu/user-menu.module';

const exportModules = [
  CardModule,
  LazyScrollModule,
  SongListModule,
  UserMenuModule,
  ImageModule,
];

@NgModule({
  imports: [...exportModules, RouterModule.forChild([])],
  exports: [...exportModules],
})
export class WebSpotifySharedViewModule {}
