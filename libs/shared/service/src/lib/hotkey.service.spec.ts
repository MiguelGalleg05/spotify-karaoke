import { TestBed } from '@angular/core/testing';

import { HotkeyService } from './hotkey.service';

describe('HotkeyService', () => {
  let service: HotkeyService;
  const actionMethod = jest.fn();
  const actionName = 'action';
  const actionKeys = 'control.q';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotkeyService);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add action to the list', () => {
    service.addShortcut({ keys: actionKeys, action: actionName });

    expect(service.hotkeys).toHaveLength(1);
  });

  it('should not allow to add the same key shortcut', () => {
    service.addShortcut({ keys: actionKeys, action: actionName });

    expect(() => {
      service.addShortcut({ keys: actionKeys, action: actionName });
    }).toThrow();
  });

  it('should perform action when keys pressed', () => {
    service
      .addShortcut({ keys: actionKeys, action: actionName })
      .subscribe(() => actionMethod());

    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'q', ctrlKey: true }),
    );

    expect(actionMethod).toBeCalled();
  });
});
