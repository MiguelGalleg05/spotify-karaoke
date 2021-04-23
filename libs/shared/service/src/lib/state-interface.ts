import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateInterface<T> {
  readonly state$ = new BehaviorSubject<T>({} as T);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState(t: any): void {
    this.state$.next({
      ...this.state$.value,
      ...t,
    });
  }
}
