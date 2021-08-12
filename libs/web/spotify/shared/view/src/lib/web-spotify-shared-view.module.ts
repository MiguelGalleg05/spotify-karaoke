import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardModule } from './card/card.module';
import { ImageModule } from './image/image.module';
import { LazyScrollModule } from './lazy-scroll/lazy-scroll.module';
import { TrackListModule } from './track-list/track-list.module';
import { UserMenuModule } from './user-menu/user-menu.module';

const exportModules = [
  CardModule,
  LazyScrollModule,
  TrackListModule,
  UserMenuModule,
  ImageModule,
];

@NgModule({
  imports: [...exportModules, RouterModule.forChild([])],
  exports: [...exportModules],
})
export class WebSpotifySharedViewModule {}
