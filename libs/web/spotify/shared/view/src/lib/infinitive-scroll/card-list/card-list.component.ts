import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

import { CardListStrategy } from './card-list.strategy';
import { CardListViewMode } from '../../card/dynamic-card-list/dynamic-card-list.component';

@Component({
  selector: 'artur-ba-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent<T, R> implements OnInit {
  @Input() strategy: CardListStrategy<T, R>;

  @Input() viewMode: CardListViewMode;

  data: T[] = [];

  requestParams: R;

  isLoading$ = new BehaviorSubject(true);

  protected pagination = {} as PaginationInterface;

  ngOnInit(): void {
    this.initRequestParams();
    this.initData();
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
    this.data = [...this.data, ...this.getItemsFromResponse(response)];
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
