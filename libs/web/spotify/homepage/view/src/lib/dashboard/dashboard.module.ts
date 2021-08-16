import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from '@artur-ba/web/spotify/shared/view';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, CardModule],
})
export class DashboardModule {}
