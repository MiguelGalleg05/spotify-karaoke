import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { AlbumCardDecoratorComponent } from './album-card-decorator/album-card-decorator.component';
import { CardComponent } from './card/card.component';
import { CardDecoratorComponent } from './card-decorator/card-decorator.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';

const exports = [
  CardComponent,
  AlbumCardDecoratorComponent,
  CardWrapperComponent,
];

@NgModule({
  declarations: [...exports, CardDecoratorComponent],
  imports: [CommonModule, MatCardModule],
  exports,
})
export class CardModule {}
