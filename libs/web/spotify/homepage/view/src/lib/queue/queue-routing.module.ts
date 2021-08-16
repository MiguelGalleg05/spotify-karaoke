import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { QueueComponent } from './queue/queue.component';

const routes: Routes = [{ path: '', component: QueueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueueRoutingModule {}
