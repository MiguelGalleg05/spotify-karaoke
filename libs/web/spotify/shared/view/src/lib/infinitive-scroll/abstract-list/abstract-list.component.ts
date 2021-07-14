import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

@Component({
  template: '',
})
export abstract class AbstractListComponent<T, R> implements OnInit {
  data: T[] = [];

  requestParams: R;

  isLoading$ = new BehaviorSubject(true);

  protected pagination = {} as PaginationInterface;

  constructor(protected readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initRequestParams();
    this.initData();
  }

  abstract getData(
    requestParam: R,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  abstract getRequestParams(): R;

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
