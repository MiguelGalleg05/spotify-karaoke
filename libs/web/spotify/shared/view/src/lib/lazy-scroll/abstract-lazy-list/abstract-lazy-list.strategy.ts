import { ActivatedRoute } from '@angular/router';
import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

export abstract class AbstractLazyListStrategy<T, R> {
  abstract getData(
    requestParam: R,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  abstract getRequestParams(): R;
}

export abstract class SearchCardListStrategy<T>
  implements AbstractLazyListStrategy<T, string>
{
  constructor(protected readonly route: ActivatedRoute) {}

  abstract getData(
    requestParam: string,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  getRequestParams(): string {
    return this.route.snapshot.queryParams.q;
  }
}
