import { Inject, Injectable } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { UserSettingsService } from './user-settings.service';

export interface Options {
  keys: string;
  element: any;
  action: string;
}

@Injectable({
  providedIn: 'root',
})
export class HotkeyService {
  readonly defaults: Partial<Options> = {
    element: this.document,
  };

  readonly hotkeys: Partial<Options>[] = [];

  constructor(
    protected eventManager: EventManager,
    protected userSettings: UserSettingsService,
    @Inject(DOCUMENT) protected document: Document
  ) {}

  addShortcut(options: Partial<Options>) {
    if (this.isAlreadyAdded(options.keys)) {
      throw new Error(`key combination ${options.keys} already added`);
      return;
    }
    const merged = { ...this.defaults, ...options };
    this.hotkeys.push(merged);
    const event = `keydown.${merged.keys}`;

    return new Observable((observer) => {
      const handler = (e) => {
        e.preventDefault();
        observer.next(e);
      };

      const dispose = this.eventManager.addEventListener(
        merged.element,
        event,
        handler
      );

      return () => {
        dispose();
      };
    });
  }

  protected isAlreadyAdded(keys: string): boolean {
    return this.hotkeys.some((hotkey) => hotkey.keys === keys);
  }
}
