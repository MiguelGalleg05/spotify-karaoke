import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';
import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { album, playlist } from '../../../../.storybook/sharedData';
import { CardListViewMode } from '../dynamic-card-list/dynamic-card-list.component';
import { CardModule } from '../card.module';
import { CardWrapperWithContentComponent } from './card-wrapper-with-content.component';
import { PlayModule } from '../../play/play.module';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';

export default {
  component: CardWrapperWithContentComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CardModule,
        PlayModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: CardWrapperWithContentComponent },
        ]),
        WebSpotifySharedDirectivesModule,
      ],
      providers: [
        {
          provide: SpotifyPlayerService,
          useClass: SpotifyPlayerServiceMock,
        },
      ],
    }),
  ],
  title: 'Card/CardWrapper/WithContent',
  argTypes: {
    viewMode: {
      control: {
        options: [
          ...Object.keys(CardListViewMode).map((a) => CardListViewMode[a]),
        ],
        type: 'radio',
      },
    },
  },
} as Meta;

const Template: Story<CardWrapperWithContentComponent<any>> = (args) => ({
  props: {
    ...args,
  },
});

export const Album = Template.bind({});
Album.args = {
  title: 'Albums',
  viewMode: CardListViewMode.ALBUM,
  data: new Array(20).fill(album),
};

export const Playlist = Template.bind({});
Playlist.args = {
  title: 'Playlists',
  viewMode: CardListViewMode.PLAYLIST,
  data: new Array(20).fill(playlist),
};

export const SingleLine = Template.bind({});
SingleLine.args = {
  singleLine: true,
  ...Album.args,
};

export const RouteParams = Template.bind({});
RouteParams.args = {
  viewMoreRoute: 'viewMore',
  viewMoreQueryParams: { q: 'foo' },
  ...Album.args,
};
