import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[arturBaAutoFocus]',
})
export class AutoFocusDirective implements OnInit {
  protected focus = true;

  constructor(protected readonly el: ElementRef) {}

  ngOnInit(): void {
    if (this.focus) {
      window.setTimeout(() => {
        this.el.nativeElement.focus();
      });
    }
  }

  @Input() set autofocus(condition: boolean) {
    this.focus = condition !== false;
  }
}
