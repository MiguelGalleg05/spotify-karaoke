import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateInterface<T> {
  readonly state$ = new BehaviorSubject<T>({} as T);

  setState(t: Object): void {
    this.state$.next({
      ...this.state$.value,
      ...t,
    });
  }
}
