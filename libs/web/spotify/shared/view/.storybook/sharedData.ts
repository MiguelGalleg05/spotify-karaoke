export enum images {
  sq500 = 'https://images.unsplash.com/photo-1625640871146-f1cdbbfb5c13?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTA2Mg&ixlib=rb-1.2.1&q=80&w=500',
  sq100 = 'https://images.unsplash.com/photo-1625741333766-ed5116195b1b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTY4MA&ixlib=rb-1.2.1&q=80&w=100',
  horizontal = 'https://images.unsplash.com/photo-1624542315822-f2c7bc3763e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTU1Nw&ixlib=rb-1.2.1&q=80&w=1100',
  vertical = 'https://images.unsplash.com/photo-1625230255604-7efe3b6af256?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTYzNw&ixlib=rb-1.2.1&q=80&w=500',
}

export const imagesArray = [
  {
    url: images.sq500,
    height: 500,
    width: 500,
  },
  {
    url: images.sq100,
    height: 100,
    width: 100,
  },
];

export const album = {
  images: imagesArray,
  name: 'Appetite For Destruction',
  release_date: '1998-10-10',
  uri: 'album/3I9Z1nDCL4E0cP62flcbI5',
};

export const artist = {
  external_urls: {
    spotify: 'https://open.spotify.com/artist/1BqIPGrEhdjdLFpUzce2dh',
  },
  href: 'https://api.spotify.com/v1/artists/1BqIPGrEhdjdLFpUzce2dh',
  id: '1BqIPGrEhdjdLFpUzce2dh',
  name: 'Durante',
  type: 'artist',
  uri: 'spotify:artist:1BqIPGrEhdjdLFpUzce2dh',
};

export const artists = [artist];

export const playlist = {
  images: [
    {
      url: images.sq500,
      height: 500,
      width: 500,
    },
  ],
  name: 'Appetite For Destruction',
  owner: { display_name: 'Guns and Roses' },
  uri: 'playlist/3I9Z1nDCL4E0cP62flcbI5',
};

export const track = {
  track_number: 9,
  name: 'Welcome to the Jungle',
  album,
  artists,
  duration_ms: 251003,
};
