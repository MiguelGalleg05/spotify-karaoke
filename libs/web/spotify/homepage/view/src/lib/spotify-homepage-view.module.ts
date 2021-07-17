import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SharedServiceModule } from '@artur-ba/shared/service';
import { SharedViewModule } from '@artur-ba/shared/view';
import { WebSpotifyPlayerViewModule } from '@artur-ba/web/spotify/player/view';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';
import { WebSpotifySharedViewModule } from '@artur-ba/web/spotify/shared/view';
import { WebSpotifySidebarViewModule } from '@artur-ba/web/spotify/sidebar/view';

import { AlbumComponent } from './album/album.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QueueComponent } from './queue/queue.component';
import { WebSpotifyHomepageViewRoutingModule } from './spotify-homepage-view.routing';

@NgModule({
  imports: [
    CommonModule,
    WebSpotifySharedViewModule,
    WebSpotifyHomepageViewRoutingModule,
    WebSpotifyPlayerViewModule,
    WebSpotifySidebarViewModule,
    WebSpotifySharedPipeModule,
    SharedViewModule,
    SharedServiceModule,
  ],
  declarations: [
    HomepageComponent,
    DashboardComponent,
    QueueComponent,
    AlbumComponent,
  ],
  exports: [HomepageComponent],
})
export class WebSpotifyHomepageViewModule {}
