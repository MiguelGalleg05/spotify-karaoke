import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ImageModule } from '../../image/image.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { TrackListColumns, TrackListComponent } from './track-list.component';
import { track } from '../../../../.storybook/sharedData';
import { TrackRowComponent } from '../track-row/track-row.component';

export default {
  title: 'TrackList/TrackList',
  component: TrackListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TrackListComponent, TrackRowComponent],
      imports: [
        ImageModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: TrackListComponent },
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

const Template: Story<TrackListComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  tracks: [track],
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
