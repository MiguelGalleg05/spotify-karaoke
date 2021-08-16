import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageModule } from '../image/image.module';
import { LazyScrollModule } from '../lazy-scroll/lazy-scroll.module';
import { PlayModule } from '../play/play.module';
import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { AlbumCardDecoratorComponent } from './album-card-decorator/album-card-decorator.component';
import { CardComponent } from './card/card.component';
import { CardLazyListComponent } from './card-lazy-list/card-lazy-list.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { CardWrapperWithContentComponent } from './card-wrapper-with-content/card-wrapper-with-content.component';
import { DynamicCardListComponent } from './dynamic-card-list/dynamic-card-list.component';
import { PlaylistCardDecoratorComponent } from './playlist-card-decorator/playlist-card-decorator.component';
import { TrackCardDecoratorComponent } from './track-card-decorator/track-card-decorator.component';

const exports = [
  AlbumCardDecoratorComponent,
  CardComponent,
  CardWrapperComponent,
  PlaylistCardDecoratorComponent,
  DynamicCardListComponent,
  CardWrapperWithContentComponent,
  CardLazyListComponent,
];

@NgModule({
  declarations: [...exports, TrackCardDecoratorComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([]),
    ImageModule,
    PlayModule,
    LazyScrollModule,
    WebSpotifySharedDirectivesModule,
  ],
  exports,
})
export class CardModule {}
