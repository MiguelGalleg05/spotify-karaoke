import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  template: '',
})
export abstract class CardDecoratorComponent<T>
  extends CardComponent
  implements OnInit
{
  @Input() data: T;

  @ViewChild(CardComponent, { static: true })
  protected cardComponent: CardComponent;

  set cardImageAlt(cardImageAlt: string) {
    this.cardComponent.cardImageAlt = cardImageAlt;
  }
  get cardImageAlt(): string {
    return this.cardComponent.cardImageAlt;
  }

  ngOnInit(): void {
    if (this.data) {
      this.initWithData();
    }
  }

  protected abstract initWithData(): void;
}
