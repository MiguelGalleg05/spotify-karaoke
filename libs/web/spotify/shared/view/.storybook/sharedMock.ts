import { action } from '@storybook/addon-actions';

export class SpotifyPlayerServiceMock {
  playContext(context_uri) {
    action('playContext')(context_uri);
  }
}
