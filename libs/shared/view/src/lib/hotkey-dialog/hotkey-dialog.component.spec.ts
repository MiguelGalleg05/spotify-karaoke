import { HotkeyDialogComponent } from './hotkey-dialog.component';

describe('HotkeyDialogComponent', () => {
  let component: HotkeyDialogComponent;

  beforeEach(() => {
    component = new HotkeyDialogComponent({});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('transform key combination into html', () => {
    it('should control.q', () => {
      const html = component.renderKeyboard('control.q');

      expect(html).toEqual('<kbd>control</kbd>+<kbd>q</kbd>');
    });
    it('should handle alt.arrowUp', () => {
      const html = component.renderKeyboard('alt.ArrowUp');

      expect(html).toEqual('<kbd>alt</kbd>+<kbd>&#8593;</kbd>');
    });
  });
});
