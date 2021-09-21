import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, LanguageResolver } from '@artur-ba/shared/service';

import { LoginComponent } from './login/login/login.component';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { spotify_callback: false },
    resolve: {
      languages: LanguageResolver,
    },
  },
  {
    path: 'spotify',
    component: LoginComponent,
    data: { spotify_callback: true },
    resolve: {
      languages: LanguageResolver,
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('@artur-ba/web/spotify/homepage/view').then(
        (m) => m.WebSpotifyHomepageViewModule,
      ),
    canActivate: [AuthGuard],
    resolve: {
      languages: LanguageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
