import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

import { PlayButtonComponent, PlayButtonStyle } from './play-button.component';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';

export default {
  title: 'Play/PlayButton',
  component: PlayButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [PlayButtonComponent],
      imports: [MatButtonModule, MatIconModule],
      providers: [
        {
          provide: SpotifyPlayerService,
          useClass: SpotifyPlayerServiceMock,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<PlayButtonComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  context_uri: 'spotify:album:0rkFxZHJhYGKi5qJjZxq',
};

export const Round = Template.bind({});
Round.args = {
  ...Default.args,
  style: PlayButtonStyle.ROUND,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Default.args,
  style: PlayButtonStyle.ICON,
};
