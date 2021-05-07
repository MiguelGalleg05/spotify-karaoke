import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'artur-ba-hotkey-dialog',
  templateUrl: './hotkey-dialog.component.html',
  styleUrls: ['./hotkey-dialog.component.scss'],
})
export class HotkeyDialogComponent {
  readonly symbols = {
    ArrowLeft: '&#8592;', // ←
    ArrowRight: '&#8594;', // →
    ArrowUp: '&#8593;', // ↑
    ArrowDown: '&#8595;', // ↓
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  renderKeyboard(keys: string): string {
    let keysString = keys.split('.');
    keysString = keysString.map((key) => {
      return this.symbols[key] || key;
    });
    keysString = keysString.map((key) => `<kbd >${key}` + '</kbd>');
    return keysString.reduce((p, c) => p + '+' + c);
  }
}
