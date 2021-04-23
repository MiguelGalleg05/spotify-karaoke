import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { SharedServiceModule } from '@artur-ba/shared/service';
import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebLyricsViewModule,
    SharedServiceModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
