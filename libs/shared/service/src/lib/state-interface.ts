import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateInterface<T> {
  readonly state$ = new BehaviorSubject<T>({} as T);

  setState(t: Partial<T>): void {
    this.state$.next({
      ...this.state$.value,
      ...t,
    });
  }
}
