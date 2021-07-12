import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IndefiniteScrollComponent } from './indefinite-scroll/indefinite-scroll.component';

const exports = [IndefiniteScrollComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports,
})
export class InfinitiveScrollModule {}
