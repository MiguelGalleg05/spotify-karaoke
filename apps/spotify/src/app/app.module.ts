import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WebLyricsViewModule } from '@artur-ba/web/lyrics/view';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebLyricsViewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
