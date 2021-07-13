# Spotify

## Why it's created

I wanted to try doing something bigger in Angular framework.

I like to sing along songs and spotify doesn't have a lyrics.

I've tried to implement that for them.

## Used resources

- [minilyrics proxy](https://github.com/olee/minilyrics-proxy). Used to get a lyrics from a MiniLyrics. Thanks for your work
- [angular spotify](https://github.com/trungk18/angular-spotify). You need to check that out. This was a big inspiration for my project
- [lcr parser](https://github.com/anhthii/lrc-parser). I've adopted this parser

## Structure

```bash
.
└── root
    ├── apps
    │   └── angular-spotify
    └── libs
        ├── shared
        │   ├── interceptors
        │   ├── service
        │   ├── test-helpers
        │   └── view
        └── web
            ├── lyrics
            │   ├── mini-lyrics
            │   ├── model
            │   └── view
            └── spotify
                ├── homepage
                ├── player
                ├── shared
                │   ├── helper
                │   ├── pipe
                │   ├── service
                │   └── view (Storybook)
                └── sidebar

```

### Storybook

I've used a storybook for a shared view description and visual tests

The storybook documentation is available [here](https://development--60ed26c8451cdd003bd881db.chromatic.com)
