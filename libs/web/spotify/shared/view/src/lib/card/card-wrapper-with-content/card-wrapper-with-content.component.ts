import { Component, Input } from '@angular/core';

import { CardListViewMode } from '../dynamic-card-list/dynamic-card-list.component';

@Component({
  selector: 'artur-ba-card-wrapper-with-content',
  templateUrl: './card-wrapper-with-content.component.html',
})
export class CardWrapperWithContentComponent<T> {
  @Input() title: string;
  @Input() viewMoreRoute: string;
  @Input() viewMoreQueryParams: unknown;
  @Input() singleLine = false;

  @Input() viewMode: CardListViewMode;
  @Input() data: T[] = [];
}
