import { BehaviorSubject, Subscription } from 'rxjs';
import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { filter } from 'rxjs/operators';

import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

import { AlbumCardDecoratorComponent } from '../../card/album-card-decorator/album-card-decorator.component';
import { CardDecoratorComponent } from '../../card/card-decorator/card-decorator.component';
import { CardListDirective } from './card-list.directive';
import { CardListStrategy } from './card-list.strategy';

export enum CardListViewMode {
  ALBUM = 'Album',
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const viewModeMap = new Map<
  CardListViewMode,
  Type<CardDecoratorComponent<any>>
>();
viewModeMap.set(CardListViewMode.ALBUM, AlbumCardDecoratorComponent);

@Component({
  selector: 'artur-ba-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent<T, R> implements OnInit, OnDestroy {
  @Input() strategy: CardListStrategy<T, R>;

  @Input() viewMode: CardListViewMode;

  @ViewChild(CardListDirective, { static: true }) cardList!: CardListDirective;

  data: T[] = [];

  requestParams: R;

  isLoading$ = new BehaviorSubject(true);

  protected pagination = {} as PaginationInterface;

  protected subscription = new Subscription();

  constructor(
    protected readonly componentFactoryResolver: ComponentFactoryResolver,
    protected readonly injector: Injector,
  ) {}

  ngOnInit(): void {
    this.initRequestParams();
    this.initData();
    this.initSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getData(
    requestParam: R,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>> {
    return this.strategy.getData(requestParam, pagination);
  }

  getRequestParams(): R {
    return this.strategy.getRequestParams();
  }

  isMoreToShow(): boolean {
    const { total, offset, limit } = this.pagination;
    return total > offset + limit;
  }

  loadMoreData(): void {
    this.isLoading$.next(true);
    this.getMoreData();
  }

  protected initSubscription(): void {
    this.subscription.add(
      this.isLoading$
        .pipe(filter((isLoading) => isLoading === false))
        .subscribe(() => this.loadComponents()),
    );
  }

  protected loadComponents(): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        viewModeMap.get(this.viewMode),
      );

    const viewContainerRef = this.cardList.viewContainerRef;
    viewContainerRef.clear();

    this.data.forEach((data) => {
      const component = componentFactory.create(this.injector);
      component.instance.data = data;
      viewContainerRef.insert(component.hostView);
    });
  }

  protected initRequestParams(): void {
    this.requestParams = this.getRequestParams();
  }

  protected async initData(): Promise<void> {
    const response = await this.getData(this.requestParams, this.pagination);
    this.data = this.getItemsFromResponse(response);
    this.pagination = this.getPaginationFromResponse(response);
    this.isLoading$.next(false);
  }

  protected async getMoreData(): Promise<void> {
    this.pagination.offset += this.pagination.limit;
    const response = await this.getData(this.requestParams, this.pagination);
    this.data.push(...this.getItemsFromResponse(response));
    this.isLoading$.next(false);
  }

  protected getItemsFromResponse(response: SpotifyApi.PagingObject<T>): T[] {
    return response.items;
  }

  protected getPaginationFromResponse(
    response: SpotifyApi.PagingObject<T>,
  ): PaginationInterface {
    const { limit, next, offset, previous, total } = response;
    return { limit, next, offset, previous, total };
  }
}
