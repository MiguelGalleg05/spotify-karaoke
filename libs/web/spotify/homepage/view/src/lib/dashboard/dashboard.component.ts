import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TrackHelper } from '@artur-ba/web/spotify/shared/helper';
import { UserSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggleControl = new FormControl(false);
  album: SpotifyApi.AlbumObjectFull = {
    album_type: 'album',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
        },
        href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
        id: '3qm84nBOXUEQ2vnTfUTTFC',
        name: "Guns N' Roses",
        type: 'artist',
        uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
      },
    ],
    copyrights: [
      {
        text: '© 1987 The David Geffen Company',
        type: 'C',
      },
      {
        text: '℗ 1987 UMG Recordings, Inc.',
        type: 'P',
      },
    ],
    external_ids: {
      upc: '00008811928629',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/album/3I9Z1nDCL4E0cP62flcbI5',
    },
    genres: [],
    href: 'https://api.spotify.com/v1/albums/3I9Z1nDCL4E0cP62flcbI5',
    id: '3I9Z1nDCL4E0cP62flcbI5',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e0268384dd85fd5e95831252f60',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d0000485168384dd85fd5e95831252f60',
        width: 64,
      },
    ],
    label: 'Geffen',
    name: 'Appetite For Destruction',
    popularity: 77,
    release_date: '1987-07-21',
    release_date_precision: 'day',
    tracks: {
      href:
        'https://api.spotify.com/v1/albums/3I9Z1nDCL4E0cP62flcbI5/tracks?offset=0&limit=50&market=PL',
      items: [
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 272026,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/0bVtevEgtDIeRjCJbK3Lmv',
          },
          href: 'https://api.spotify.com/v1/tracks/0bVtevEgtDIeRjCJbK3Lmv',
          id: '0bVtevEgtDIeRjCJbK3Lmv',
          is_playable: true,
          name: 'Welcome To The Jungle',
          preview_url:
            'https://p.scdn.co/mp3-preview/9144b45242fddabc10627e04c94eb0eb8720936f?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 1,
          type: 'track',
          uri: 'spotify:track:0bVtevEgtDIeRjCJbK3Lmv',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 201360,
          explicit: true,
          external_urls: {
            spotify: 'https://open.spotify.com/track/63HA3dpnOmdDcazJ9sDfrh',
          },
          href: 'https://api.spotify.com/v1/tracks/63HA3dpnOmdDcazJ9sDfrh',
          id: '63HA3dpnOmdDcazJ9sDfrh',
          is_playable: true,
          name: "It's So Easy",
          preview_url:
            'https://p.scdn.co/mp3-preview/3ef45103a3f827d270d28d3daf23e1c6d9df7b98?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 2,
          type: 'track',
          uri: 'spotify:track:63HA3dpnOmdDcazJ9sDfrh',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 266173,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/2vNw57KPaYDzkyPxXYUORX',
          },
          href: 'https://api.spotify.com/v1/tracks/2vNw57KPaYDzkyPxXYUORX',
          id: '2vNw57KPaYDzkyPxXYUORX',
          is_playable: true,
          name: 'Nightrain',
          preview_url:
            'https://p.scdn.co/mp3-preview/88c97986d6b9fa91f2dcd5dc3bbaaaa7b6aa1384?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 3,
          type: 'track',
          uri: 'spotify:track:2vNw57KPaYDzkyPxXYUORX',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 260093,
          explicit: true,
          external_urls: {
            spotify: 'https://open.spotify.com/track/0OgjX682GaRCIdbqerNL6g',
          },
          href: 'https://api.spotify.com/v1/tracks/0OgjX682GaRCIdbqerNL6g',
          id: '0OgjX682GaRCIdbqerNL6g',
          is_playable: true,
          name: 'Out Ta Get Me',
          preview_url:
            'https://p.scdn.co/mp3-preview/3636a6bfc69e21fee5512fc51b736df6705389d6?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 4,
          type: 'track',
          uri: 'spotify:track:0OgjX682GaRCIdbqerNL6g',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 225706,
          explicit: true,
          external_urls: {
            spotify: 'https://open.spotify.com/track/4DnEyHNO8MdhFYFrDq73BV',
          },
          href: 'https://api.spotify.com/v1/tracks/4DnEyHNO8MdhFYFrDq73BV',
          id: '4DnEyHNO8MdhFYFrDq73BV',
          is_playable: true,
          name: 'Mr. Brownstone',
          preview_url:
            'https://p.scdn.co/mp3-preview/14bb79495bcebaef9ff363fa8c4da22b07eb1957?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 5,
          type: 'track',
          uri: 'spotify:track:4DnEyHNO8MdhFYFrDq73BV',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 405640,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/3YBZIN3rekqsKxbJc9FZko',
          },
          href: 'https://api.spotify.com/v1/tracks/3YBZIN3rekqsKxbJc9FZko',
          id: '3YBZIN3rekqsKxbJc9FZko',
          is_playable: true,
          name: 'Paradise City',
          preview_url:
            'https://p.scdn.co/mp3-preview/681ae273ca97ee01e22764f4c4f6cabe890c761c?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 6,
          type: 'track',
          uri: 'spotify:track:3YBZIN3rekqsKxbJc9FZko',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 218666,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/2dyfo7lqKI7NtSAhUZwnoJ',
          },
          href: 'https://api.spotify.com/v1/tracks/2dyfo7lqKI7NtSAhUZwnoJ',
          id: '2dyfo7lqKI7NtSAhUZwnoJ',
          is_playable: true,
          name: 'My Michelle',
          preview_url:
            'https://p.scdn.co/mp3-preview/e4a74ef72e69f43e590a4a4f8232886ee2a1f681?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 7,
          type: 'track',
          uri: 'spotify:track:2dyfo7lqKI7NtSAhUZwnoJ',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 230040,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/3N0QIWlUDUsQJ3UDhKtMRC',
          },
          href: 'https://api.spotify.com/v1/tracks/3N0QIWlUDUsQJ3UDhKtMRC',
          id: '3N0QIWlUDUsQJ3UDhKtMRC',
          is_playable: true,
          name: 'Think About You',
          preview_url:
            'https://p.scdn.co/mp3-preview/b8f961358cf306878248e7642b378a4b3457626a?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 8,
          type: 'track',
          uri: 'spotify:track:3N0QIWlUDUsQJ3UDhKtMRC',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 354520,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51',
          },
          href: 'https://api.spotify.com/v1/tracks/7o2CTH4ctstm8TNelqjb51',
          id: '7o2CTH4ctstm8TNelqjb51',
          is_playable: true,
          name: "Sweet Child O' Mine",
          preview_url:
            'https://p.scdn.co/mp3-preview/4c5b68ac36d8c9774be4d4a4b3fd71543ddff74d?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 9,
          type: 'track',
          uri: 'spotify:track:7o2CTH4ctstm8TNelqjb51',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 195800,
          explicit: true,
          external_urls: {
            spotify: 'https://open.spotify.com/track/1kuL80G4YwSbuGGNPLRFWF',
          },
          href: 'https://api.spotify.com/v1/tracks/1kuL80G4YwSbuGGNPLRFWF',
          id: '1kuL80G4YwSbuGGNPLRFWF',
          is_playable: true,
          name: "You're Crazy",
          preview_url:
            'https://p.scdn.co/mp3-preview/642325b670c44cb32d4865824636adf29e9fa635?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 10,
          type: 'track',
          uri: 'spotify:track:1kuL80G4YwSbuGGNPLRFWF',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 205600,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/2seAsYG2FiexpXj8UhG9Zk',
          },
          href: 'https://api.spotify.com/v1/tracks/2seAsYG2FiexpXj8UhG9Zk',
          id: '2seAsYG2FiexpXj8UhG9Zk',
          is_playable: true,
          name: 'Anything Goes',
          preview_url:
            'https://p.scdn.co/mp3-preview/9da94ff4cd6a8d9c1ef67dd77ab3a459b5696d8d?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 11,
          type: 'track',
          uri: 'spotify:track:2seAsYG2FiexpXj8UhG9Zk',
        },
        {
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC',
              },
              href: 'https://api.spotify.com/v1/artists/3qm84nBOXUEQ2vnTfUTTFC',
              id: '3qm84nBOXUEQ2vnTfUTTFC',
              name: "Guns N' Roses",
              type: 'artist',
              uri: 'spotify:artist:3qm84nBOXUEQ2vnTfUTTFC',
            },
          ],
          disc_number: 1,
          duration_ms: 373466,
          explicit: false,
          external_urls: {
            spotify: 'https://open.spotify.com/track/6v5VsfCYKdrkQBTMhAlkDr',
          },
          href: 'https://api.spotify.com/v1/tracks/6v5VsfCYKdrkQBTMhAlkDr',
          id: '6v5VsfCYKdrkQBTMhAlkDr',
          is_playable: true,
          name: 'Rocket Queen',
          preview_url:
            'https://p.scdn.co/mp3-preview/bbf7ce9e621aad57b8c69853cb338a0c11c4f312?cid=88bbdd189e5d49849d7a6358c7d8a8ff',
          track_number: 12,
          type: 'track',
          uri: 'spotify:track:6v5VsfCYKdrkQBTMhAlkDr',
        },
      ],
      limit: 50,
      next: null,
      offset: 0,
      previous: null,
      total: 12,
    },
    type: 'album',
    uri: 'spotify:album:3I9Z1nDCL4E0cP62flcbI5',
  };

  title(): string {
    return `${this.album['name']}`;
    return `<a href='album/3I9Z1nDCL4E0cP62flcbI5'>${this.album['name']}</a>`;
  }

  image300(): string {
    return TrackHelper.getImage300Url(this.album);
  }

  constructor(protected userSettings: UserSettingsService) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.userSettings.darkMode(darkMode);
    });
  }
}
