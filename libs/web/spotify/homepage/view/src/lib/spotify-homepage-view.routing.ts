import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

export const HOMEPAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'queue',
        loadChildren: () =>
          import('./queue/queue.module').then((m) => m.QueueModule),
      },
      {
        path: 'album/:uri',
        loadChildren: () =>
          import('./album/album.module').then((m) => m.AlbumModule),
      },
      {
        path: 'playlist/:uri',
        loadChildren: () =>
          import('./playlist/playlist.module').then((m) => m.PlaylistModule),
      },
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
