import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CardListComponent } from './card-list/card-list.component';
import { CardListDirective } from './card-list/card-list.directive';
import { CardModule } from '../card/card.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

const exports = [InfiniteScrollComponent, CardListComponent];

@NgModule({
  declarations: [...exports, CardListDirective],
  imports: [CommonModule, MatProgressSpinnerModule, CardModule],
  exports,
})
export class InfiniteScrollModule {}
