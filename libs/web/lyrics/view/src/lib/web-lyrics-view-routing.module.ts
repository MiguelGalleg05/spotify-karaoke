import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LyricsComponent } from './lyrics/lyrics.component';

const ROUTES: Routes = [{ path: 'lyrics', component: LyricsComponent }];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class WebLyricsViewRoutingModule {}
