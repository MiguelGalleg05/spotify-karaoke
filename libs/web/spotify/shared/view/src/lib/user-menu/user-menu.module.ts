import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TitleComponent } from './title/title.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserMenuRoutingModule } from './user-menu.routing';

const exports = [UserMenuComponent];

@NgModule({
  declarations: [
    ...exports,
    MenuComponent,
    NavigationComponent,
    TitleComponent,
  ],
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
