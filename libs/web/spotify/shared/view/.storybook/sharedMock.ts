import { action } from '@storybook/addon-actions';

export class SpotifyPlayerServiceMock {
  play(context) {
    action('playContext')(context);
  }
}
