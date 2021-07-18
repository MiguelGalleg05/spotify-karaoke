import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { UserMenuComponent } from './user-menu.component';
import { UserMenuRoutingModule } from './user-menu.routing';

const exports = [UserMenuComponent];

@NgModule({
  declarations: [...exports],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    UserMenuRoutingModule,
  ],
  exports,
})
export class UserMenuModule {}
