import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutoFocusDirective } from './auto-focus.directive';
import { CardDirective } from './card.directive';

const exports = [CardDirective, AutoFocusDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...exports],
  exports,
})
export class WebSpotifySharedDirectivesModule {}
