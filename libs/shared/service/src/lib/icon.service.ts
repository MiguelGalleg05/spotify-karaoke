import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const Icons = ['github'];

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    protected matIconRegistry: MatIconRegistry,
    protected domSanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  protected registerIcons(): void {
    this.loadIcons(Icons, `${window.origin}/assets/icons`);
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach((key) => {
      this.matIconRegistry.addSvgIcon(
        key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${iconUrl}/${key}.svg`
        )
      );
    });
  }
}
