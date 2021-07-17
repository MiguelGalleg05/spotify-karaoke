import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[arturBaCard]',
})
export class CardDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
