import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

import { SharedViewModule } from '@artur-ba/shared/view';

import { LoginComponent } from './login/login.component';
import { ReadmeComponent } from './readme/readme.component';

const exports = [LoginComponent];

@NgModule({
  declarations: [...exports, ReadmeComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, SharedViewModule],
  exports,
})
export class LoginModule {}
