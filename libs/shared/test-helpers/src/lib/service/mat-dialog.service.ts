import { of } from 'rxjs';

export class MatDialogServiceMock {
  __config = { open: undefined };

  open = jest
    .fn()
    .mockReturnValue({ afterClosed: () => of(this.__config.open) });
}
