import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ImageModule } from '../../image/image.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { album } from '../../../../.storybook/sharedData';
import { SongRowComponent } from './song-row.component';
import { TrackListColumns } from '../song-list/song-list.component';

export default {
  title: 'SongList/SongRow',
  component: SongRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [SongRowComponent],
      imports: [
        ImageModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: SongRowComponent },
        ]),
        WebSpotifySharedPipeModule,
      ],
    }),
  ],
  argTypes: {
    columns: {
      control: {
        options: [
          ...Object.keys(TrackListColumns).map((a) => TrackListColumns[a]),
        ],
        type: 'check',
      },
    },
  },
} as Meta;

const Template: Story<SongRowComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  track: {
    track_number: 9,
    name: 'Welcome to the Jungle',
    album,
    duration_ms: 191026,
  },
  columns: [TrackListColumns.album, TrackListColumns.count],
};
