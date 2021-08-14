import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { PlayButtonComponent } from './play-button/play-button.component';
import { PlayRoutingModule } from './play-routing.module';

const exports = [PlayButtonComponent];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, PlayRoutingModule, MatButtonModule, MatIconModule],
  exports,
})
export class PlayModule {}
