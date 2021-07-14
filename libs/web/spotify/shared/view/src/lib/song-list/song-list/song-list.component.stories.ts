import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { album, artists } from '../../../../.storybook/sharedData';
import { SongListComponent, TrackListColumns } from './song-list.component';
import { SongRowComponent } from '../song-row/song-row.component';

export default {
  title: 'SongList/SongList',
  component: SongListComponent,
  decorators: [
    moduleMetadata({
      declarations: [SongListComponent, SongRowComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: SongListComponent },
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

const Template: Story<SongListComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  tracks: [
    {
      track_number: 9,
      name: 'Welcome to the Jungle',
      album,
      artists,
      duration_ms: 251003,
    },
  ],
};

export const CustomColumns = Template.bind({});
CustomColumns.args = {
  ...Default.args,
  columns: [
    TrackListColumns.count,
    TrackListColumns.album,
    TrackListColumns.image,
  ],
};
