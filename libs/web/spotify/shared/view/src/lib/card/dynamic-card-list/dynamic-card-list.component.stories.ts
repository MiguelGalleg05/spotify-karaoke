import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';
import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { album, playlist, track } from '../../../../.storybook/sharedData';
import {
  CardListViewMode,
  DynamicCardListComponent,
} from '../dynamic-card-list/dynamic-card-list.component';
import { CardModule } from '../card.module';
import { PlayModule } from '../../play/play.module';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';

export default {
  component: DynamicCardListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CardModule,
        PlayModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: DynamicCardListComponent },
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
  title: 'Card/DynamicCardList',
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

const Template: Story<DynamicCardListComponent<any>> = (args) => ({
  props: {
    ...args,
  },
});

export const Album = Template.bind({});
Album.args = {
  viewMode: CardListViewMode.ALBUM,
  data: [album],
};

export const Playlist = Template.bind({});
Playlist.args = {
  viewMode: CardListViewMode.PLAYLIST,
  data: [playlist],
};

export const Track = Template.bind({});
Track.args = {
  viewMode: CardListViewMode.TRACK,
  data: [track],
};
