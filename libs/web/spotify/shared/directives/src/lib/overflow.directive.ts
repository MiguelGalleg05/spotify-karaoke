import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[arturBaOverflow]',
  providers: [MatTooltip],
})
export class OverflowDirective implements AfterViewInit {
  @Input() arturBaOverflow = 2;

  protected readonly className = `artur-ba-overflow-${this.arturBaOverflow}`;

  constructor(
    protected readonly el: ElementRef,
    protected readonly tooltip: MatTooltip,
  ) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(this.className);
  }

  @HostListener('mouseover') mouseover() {
    this.tooltip.message = this.el.nativeElement.innerText;
    if (this.isOverflow()) {
      this.tooltip.show();
    }
  }

  @HostListener('mouseout') mouseout() {
    this.tooltip.hide();
  }

  protected isOverflow(): boolean {
    const element: HTMLElement = this.el.nativeElement;
    if (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    ) {
      return true;
    } else {
      return false;
    }
  }
}
