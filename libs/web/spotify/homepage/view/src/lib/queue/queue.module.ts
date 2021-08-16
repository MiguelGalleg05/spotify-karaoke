import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackListModule } from '@artur-ba/web/spotify/shared/view';

import { QueueComponent } from './queue/queue.component';
import { QueueRoutingModule } from './queue-routing.module';

@NgModule({
  declarations: [QueueComponent],
  imports: [CommonModule, QueueRoutingModule, TrackListModule],
})
export class QueueModule {}
