import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

import {
  AlbumComponent,
  DashboardComponent,
  QueueComponent,
} from '@artur-ba/web/spotify/view';
import { SharedViewModule } from '@artur-ba/shared/view';
import { SpotifyTokenInterceptor } from '@artur-ba/shared/interceptors';
import { WebSpotifyHomepageViewModule } from '@artur-ba/web/spotify/homepage/view';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

const ROUTES: Routes = [
  {
    path: 'lyrics',
    loadChildren: () =>
      import('@artur-ba/web/lyrics/view').then((m) => m.WebLyricsViewModule),
  },
  { path: '', component: DashboardComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'album/:uri', component: AlbumComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    WebSpotifyHomepageViewModule,
    SharedViewModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
