import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { WebSpotifyPlayerViewModule } from '@artur-ba/web/spotify/player/view';
import { WebSpotifySidebarViewModule } from '@artur-ba/web/spotify/sidebar/view';
import { WebSpotifyViewModule } from '@artur-ba/web/spotify/view';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule,
    WebSpotifyViewModule,
    WebSpotifyPlayerViewModule,
    WebSpotifySidebarViewModule,
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class WebSpotifyHomepageViewModule {}
