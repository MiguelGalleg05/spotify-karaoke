import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AlbumComponent } from './album/album.component';
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
      {
        path: 'lyrics',
        loadChildren: () =>
          import('@artur-ba/web/lyrics/view').then(
            (m) => m.WebLyricsViewModule,
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
      },
      {
        path: 'artist',
        loadChildren: () =>
          import('./artist/artist.module').then((m) => m.ArtistModule),
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
