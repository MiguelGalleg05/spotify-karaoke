import { PaginationInterface } from '@artur-ba/web/spotify/shared/service';

export abstract class AbstractListStrategy<T, R> {
  abstract getData(
    requestParam: R,
    pagination: PaginationInterface,
  ): Promise<SpotifyApi.PagingObject<T>>;

  abstract getRequestParams(): R;
}
