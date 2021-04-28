import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  EnvSettingsService,
  UserSettingsService,
} from '@artur-ba/shared/service';
import { environment } from '../environments/environment';

@Component({
  selector: 'artur-ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class') className = '';

  protected readonly subscriptions: Subscription[] = [];
  protected readonly darkClassName = 'darkMode';

  cookiesAccepted = true;

  constructor(
    protected userSettings: UserSettingsService,
    protected env: EnvSettingsService
  ) {}

  ngOnInit(): void {
    this.env.init(environment);
    const darkModeSub = this.userSettings.darkModeOn$.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName : '';
    });
    this.subscriptions.push(darkModeSub);
    this.userSettings.cookiesAccepted$
      .pipe(
        tap((cookiesAccepted) => {
          this.cookiesAccepted = cookiesAccepted;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  cookiesAccept(): void {
    this.cookiesAccepted = true;
    this.userSettings.allowCookies();
  }
}
