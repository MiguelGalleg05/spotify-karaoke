import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { AlbumCardDecoratorComponent } from './album-card-decorator/album-card-decorator.component';
import { CardComponent } from './card/card.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { PlaylistCardDecoratorComponent } from './playlist-card-decorator/playlist-card-decorator.component';

const exports = [
  AlbumCardDecoratorComponent,
  CardComponent,
  CardWrapperComponent,
  PlaylistCardDecoratorComponent,
];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, MatCardModule, RouterModule.forChild([])],
  exports,
})
export class CardModule {}
