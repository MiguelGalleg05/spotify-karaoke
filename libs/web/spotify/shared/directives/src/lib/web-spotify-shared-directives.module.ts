import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CardDirective } from './card.directive';
import { OverflowDirective } from './overflow.directive';

const exports = [AutoFocusDirective, CardDirective, OverflowDirective];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, MatTooltipModule],
  exports,
})
export class WebSpotifySharedDirectivesModule {}
