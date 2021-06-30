import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractListComponent } from '../abstract-list/abstract-list.component';

@Component({
  selector: 'artur-ba-indefinite-scroll',
  templateUrl: './indefinite-scroll.component.html',
  styleUrls: ['./indefinite-scroll.component.scss'],
})
export class IndefiniteScrollComponent implements AfterViewInit {
  @ViewChild('anchor') anchor: ElementRef<HTMLElement>;

  @ContentChild(AbstractListComponent)
  abstractList: AbstractListComponent<unknown, unknown>;

  protected observer: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.loadMore();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  isLoading$(): Observable<boolean> {
    return this.abstractList.isLoading$;
  }

  loadMore(): void {
    if (
      !this.abstractList.isLoading$.value &&
      this.abstractList.isMoreToShow()
    ) {
      this.abstractList.loadMoreData();
    }
  }
}
