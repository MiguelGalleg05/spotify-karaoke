import { Component, Input } from '@angular/core';

import { AbstractLazyListComponent } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.component';
import { CardListViewMode } from '../../card/dynamic-card-list/dynamic-card-list.component';

@Component({
  selector: 'artur-ba-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent<T, R> extends AbstractLazyListComponent<T, R> {
  @Input() viewMode: CardListViewMode;
}
