import { Component, OnInit } from '@angular/core';

import { AuthStore, PlayerService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    protected authStore: AuthStore,
    protected playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.authStore.init();
    this.playerService.init();
  }
}
