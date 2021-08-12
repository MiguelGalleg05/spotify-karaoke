import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { CardDirective } from '@artur-ba/web/spotify/shared/directives';

import { AlbumCardDecoratorComponent } from '../album-card-decorator/album-card-decorator.component';
import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';
import { PlaylistCardDecoratorComponent } from '../playlist-card-decorator/playlist-card-decorator.component';

export enum CardListViewMode {
  ALBUM = 'Album',
  PLAYLIST = 'Playlist',
}
const viewModeMap = new Map<
  CardListViewMode,
  Type<CardDecoratorComponent<any>>
>();
viewModeMap.set(CardListViewMode.ALBUM, AlbumCardDecoratorComponent);
viewModeMap.set(CardListViewMode.PLAYLIST, PlaylistCardDecoratorComponent);

@Component({
  selector: 'artur-ba-dynamic-card-list',
  templateUrl: './dynamic-card-list.component.html',
  styleUrls: ['./dynamic-card-list.component.scss'],
})
export class DynamicCardListComponent<T> implements OnInit, OnChanges {
  @Input() data: T[];

  @Input() viewMode: CardListViewMode;

  @ViewChild(CardDirective, { static: true }) cardList!: CardDirective;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected componentFactory: ComponentFactory<CardDecoratorComponent<any>>;

  protected viewContainerRef: ViewContainerRef;

  protected isInit = false;

  constructor(
    protected readonly componentFactoryResolver: ComponentFactoryResolver,
    protected readonly injector: Injector,
  ) {}

  ngOnInit(): void {
    this.componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        viewModeMap.get(this.viewMode),
      );

    this.viewContainerRef = this.cardList.viewContainerRef;
    this.isInit = true;
    this.loadComponents();
  }

  ngOnChanges(): void {
    this.isInit && this.loadComponents();
  }

  protected loadComponents(): void {
    this.viewContainerRef.clear();

    this.data?.forEach((data) => {
      const component = this.componentFactory.create(this.injector);
      component.instance.data = data;
      this.viewContainerRef.insert(component.hostView);
    });
  }
}
