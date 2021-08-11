import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'artur-ba-lazy-scroll',
  templateUrl: './lazy-scroll.component.html',
  styleUrls: ['./lazy-scroll.component.scss'],
})
export class LazyScrollComponent implements AfterViewInit {
  @ViewChild('anchor') anchor: ElementRef<HTMLElement>;

  @Input() isLoading$: Observable<boolean>;

  @Output() loadMore = new EventEmitter<void>();

  protected observer: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      root: null,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.loadMore.emit();
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }
}
