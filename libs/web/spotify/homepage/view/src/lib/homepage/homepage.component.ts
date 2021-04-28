import { Component, OnInit } from '@angular/core';

import {
  PlayerService,
  SpotifyDataService,
} from '@artur-ba/web/spotify/shared/service';
import { AuthStore } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    protected authStore: AuthStore,
    protected playerService: PlayerService,
    protected spotifyData: SpotifyDataService
  ) {}

  user;

  async ngOnInit(): Promise<void> {
    this.user = await this.spotifyData.getUserData();
    this.playerService.init();
  }
}
