import { Component, Input } from '@angular/core';

@Component({
  selector: 'artur-ba-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss'],
})
export class CardWrapperComponent {
  @Input() title: string;
  @Input() viewMoreRoute: string;
  @Input() singleLine = false;
}
