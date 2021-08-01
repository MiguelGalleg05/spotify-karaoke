import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'artur-ba-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  protected el: HTMLElement;
  protected noHoverClassName = 'sidebar--no-hover';

  @HostListener('mouseenter') onMouseEnter() {
    this.setHover();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.unsetHover();
  }

  constructor(protected readonly elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
    this.initNoHover();
  }

  protected initNoHover() {
    this.unsetHover();
  }

  protected unsetHover() {
    this.el.classList.add(this.noHoverClassName);
  }

  protected setHover() {
    this.el.classList.remove(this.noHoverClassName);
  }
}
