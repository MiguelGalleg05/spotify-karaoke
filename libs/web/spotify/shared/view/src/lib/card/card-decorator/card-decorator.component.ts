import { Component, Input, OnInit } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  template: '',
})
export abstract class CardDecoratorComponent<T>
  extends CardComponent
  implements OnInit
{
  @Input() data: T;

  ngOnInit(): void {
    if (this.data) {
      this.initWithData();
    }
  }

  protected abstract initWithData();
}
