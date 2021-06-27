import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { ArtistComponent } from './artist/artist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QueueComponent } from './queue/queue.component';

export const HOMEPAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'queue', component: QueueComponent },
      { path: 'album/:uri', component: AlbumComponent },
      { path: 'artist/:uri', component: ArtistComponent },
      { path: 'artist/:uri/albums', component: ArtistAlbumsComponent },
      {
        path: 'lyrics',
        loadChildren: () =>
          import('@artur-ba/web/lyrics/view').then(
            (m) => m.WebLyricsViewModule
          ),
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(HOMEPAGE_ROUTES)],
  exports: [RouterModule],
})
export class WebSpotifyHomepageViewRoutingModule {}
