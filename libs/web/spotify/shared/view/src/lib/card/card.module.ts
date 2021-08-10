import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ImageModule } from '../image/image.module';
import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { AlbumCardDecoratorComponent } from './album-card-decorator/album-card-decorator.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { CardWrapperWithContentComponent } from './card-wrapper-with-content/card-wrapper-with-content.component';
import { DynamicCardListComponent } from './dynamic-card-list/dynamic-card-list.component';
import { PlaylistCardDecoratorComponent } from './playlist-card-decorator/playlist-card-decorator.component';

const exports = [
  AlbumCardDecoratorComponent,
  CardComponent,
  CardWrapperComponent,
  PlaylistCardDecoratorComponent,
  DynamicCardListComponent,
  CardWrapperWithContentComponent,
  CardListComponent,
];

@NgModule({
  declarations: [...exports],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([]),
    WebSpotifySharedDirectivesModule,
    ImageModule,
  ],
  exports,
})
export class CardModule {}
