import { Component, Input } from '@angular/core';

import { AbstractListComponent } from '../../infinitive-scroll/abstract-list/abstract-list.component';
import { CardListViewMode } from '../../card/dynamic-card-list/dynamic-card-list.component';

@Component({
  selector: 'artur-ba-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent<T, R> extends AbstractListComponent<T, R> {
  @Input() viewMode: CardListViewMode;
}
