export class SpotifyAuthorize {
  SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize';
  SCOPES = [
    //Listening History
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    //Spotify Connect
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    //Playback - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'streaming',
    //Playlists
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    //Library
    'user-library-modify',
    'user-library-read',
    //Users - For SDK Playback //https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
    'user-read-email',
    'user-read-private',
  ];

  createAuthorizeURL(client_id: string) {
    const params = new URLSearchParams({
      client_id,
      redirect_uri: `${window.location.origin}/spotify/`,
      scope: encodeURIComponent(this.SCOPES.join(' ')),
      response_type: 'code',
    });
    return `${this.SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
  }
}
