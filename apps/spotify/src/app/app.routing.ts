import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@artur-ba/shared/service';

import { LoginComponent } from './login/login/login.component';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { spotify_callback: false },
  },
  {
    path: 'spotify',
    component: LoginComponent,
    data: { spotify_callback: true },
  },
  {
    path: '',
    loadChildren: () =>
      import('@artur-ba/web/spotify/homepage/view').then(
        (m) => m.WebSpotifyHomepageViewModule,
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
