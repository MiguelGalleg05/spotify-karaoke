import { Component, OnInit } from '@angular/core';

import { AuthStore, PlayerService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    protected authStore: AuthStore,
    protected playerService: PlayerService
  ) {}

  ngOnInit() {
    this.authStore.init();
    this.playerService.init();
  }
}
