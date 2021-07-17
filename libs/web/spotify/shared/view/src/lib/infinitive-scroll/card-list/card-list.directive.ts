import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[arturBaCardList]',
})
export class CardListDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
