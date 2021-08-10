import {
  PaginationInterface,
  SpotifyPlaylistDataService,
} from '@artur-ba/web/spotify/shared/service';
import { AbstractListStrategy } from '@artur-ba/web/spotify/shared/view';

export class PlaylistListStrategy
  implements
    AbstractListStrategy<SpotifyApi.ListOfCurrentUsersPlaylistsResponse, null>
{
  constructor(protected readonly spotifyPlaylist: SpotifyPlaylistDataService) {}
  getData(
    requestParam: null,
    pagination: PaginationInterface,
  ): Promise<
    SpotifyApi.PagingObject<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>
  > {
    return this.spotifyPlaylist.getCurrentUserPlaylists(pagination);
  }

  getRequestParams(): null {
    return null;
  }
}
