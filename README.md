# Spotify Karaoke

[![Website](https://img.shields.io/website?down_color=lightgray&down_message=offline&style=flat-square&up_color=green&up_message=online&url=https%3A%2F%2Fspotify-karaoke.netlify.app)](spotify-karaoke.netlify.app/)
[![Netlify Status](https://img.shields.io/netlify/39fabbc6-dcc1-40e8-8702-a3b798a130e5?style=flat-square)](spotify-karaoke.netlify.app/)
[![Top Lang](https://img.shields.io/github/languages/top/ArturBa/spotify-karaoke?style=flat-square)](https://github.com/ArturBa/spotify-karaoke/search?l=typescript)
[![Licence](https://img.shields.io/github/license/ArturBa/spotify-karaoke?style=flat-square)](./LICENCE)
[![Release](https://img.shields.io/github/v/release/ArturBa/spotify-karaoke?style=flat-square)](https://github.com/ArturBa/spotify-karaoke/releases)
[![Build and Test](https://img.shields.io/github/workflow/status/ArturBa/spotify-karaoke/Build%20and%20test?label=Build%20and%20Test&style=flat-square)](https://github.com/ArturBa/spotify-karaoke/actions/workflows/build_test.yml)
[![Dependabot](https://flat.badgen.net/github/dependabot/ArturBa/spotify-karaoke)](https://github.com/apps/dependabot)

## Why it's created

I wanted to try doing something bigger in Angular framework.

I like to sing along songs and spotify doesn't have a lyrics.

I've tried to implement that for them.

## Preview

![Preview gif](./docs/gif/preview.gif)

## Used resources

- [minilyrics proxy](https://github.com/olee/minilyrics-proxy). Used to get a lyrics from a MiniLyrics. Thanks for your work
- [angular spotify](https://github.com/trungk18/angular-spotify). You need to check that out. This was a big inspiration for my project
- [lcr parser](https://github.com/anhthii/lrc-parser). I've adopted this parser for a getting a lyrics in object form

## Structure

```bash
root
├── apps
│   └── angular-spotify
└── libs
    ├── shared
    │   ├── interceptors (jest)
    │   ├── service (test)
    │   ├── test-helpers
    │   └── view (jest)
    └── web
        ├── lyrics
        │   ├── mini-lyrics
        │   ├── model (jest)
        │   └── view (jest)
        └── spotify
            ├── homepage
            ├── player
            ├── shared
            │   ├── helper (jest)
            │   ├── pipe (jest)
            │   ├── service
            │   └── view (Storybook)
            └── sidebar
```

## More details

Read more about:

- [Internationalization](./docs/i18n.md)
- [Technologies](./docs/technologies.md)
- [Tests](./docs/tests.md)
- [CI/CD](./docs/ci_cd.md)
