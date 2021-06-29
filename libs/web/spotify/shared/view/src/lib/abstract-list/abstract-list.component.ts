import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

@Component({
  template: '',
})
export abstract class AbstractListComponent<T> implements OnInit {
  data: T[] = [];

  uri: string;

  isLoading$ = new BehaviorSubject(true);

  protected pagination = {} as PaginationInterface;

  constructor(protected readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.uri = this.route.snapshot.params.uri;
    this.getInitData();
  }

  abstract getData(
    uri: string,
    pagination: PaginationInterface
  ): Promise<SpotifyApi.PagingObject<T>>;

  isMoreToShow(): boolean {
    const { total, offset, limit } = this.pagination;
    return total > offset + limit;
  }

  loadMoreData(): void {
    this.isLoading$.next(true);
    this.getMoreData();
  }

  protected async getInitData(): Promise<void> {
    const response = await this.getData(this.uri, this.pagination);
    this.data = this.getItemsFromResponse(response);
    this.pagination = this.getPaginationFromResponse(response);
    this.isLoading$.next(false);
  }

  protected async getMoreData(): Promise<void> {
    this.pagination.offset += this.pagination.limit;
    const response = await this.getData(this.uri, this.pagination);
    this.data.push(...this.getItemsFromResponse(response));
    this.isLoading$.next(false);
  }

  protected getItemsFromResponse(response: SpotifyApi.PagingObject<T>): T[] {
    return response.items;
  }

  protected getPaginationFromResponse(
    response: SpotifyApi.PagingObject<T>
  ): PaginationInterface {
    const { limit, next, offset, previous, total } = response;
    return { limit, next, offset, previous, total };
  }
}
