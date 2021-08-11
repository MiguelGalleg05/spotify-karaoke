import { Component, Input } from '@angular/core';

import { AbstractLazyListComponent } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.component';
import { CardListViewMode } from '../dynamic-card-list/dynamic-card-list.component';

@Component({
  selector: 'artur-ba-card-lazy-list',
  templateUrl: './card-lazy-list.component.html',
})
export class CardLazyListComponent<T, R> extends AbstractLazyListComponent<
  T,
  R
> {
  @Input() viewMode: CardListViewMode;
}
