import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  EnvSettingsService,
  IconService,
  UserSettingsService,
} from '@artur-ba/shared/service';
import { environment } from '../environments/environment';

@Component({
  selector: 'artur-ba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  protected readonly subscriptions: Subscription[] = [];
  protected readonly darkClassName = 'darkMode';

  cookiesAccepted = true;

  constructor(
    protected userSettings: UserSettingsService,
    protected env: EnvSettingsService,
    @Inject(DOCUMENT) private document: Document,
    protected icon: IconService
  ) {}

  ngOnInit(): void {
    this.env.init(environment);
    const darkModeSub = this.userSettings.darkModeOn$.subscribe((darkMode) => {
      this.handleDarkModeChange(darkMode);
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

  protected handleDarkModeChange(newMode: boolean) {
    if (newMode) {
      this.document.body.classList.add(this.darkClassName);
    } else {
      this.document.body.classList.remove(this.darkClassName);
    }
  }
}
