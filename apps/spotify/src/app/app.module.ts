import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {
  ErrorInterceptor,
  ProxyInterceptor,
  SpotifyMarketInterceptor,
  SpotifyTokenInterceptor,
} from '@artur-ba/shared/interceptors';
import { SharedViewModule } from '@artur-ba/shared/view';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';
import { LoginModule } from './login/login.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule,
    SharedViewModule,
    LoginModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyMarketInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProxyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
