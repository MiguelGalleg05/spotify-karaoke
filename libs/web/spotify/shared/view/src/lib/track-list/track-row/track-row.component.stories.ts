import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ImageModule } from '../../image/image.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { track } from '../../../../.storybook/sharedData';
import { TrackListColumns } from '../track-list/track-list.component';
import { TrackRowComponent } from './track-row.component';

export default {
  title: 'TrackList/TrackRow',
  component: TrackRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [TrackRowComponent],
      imports: [
        ImageModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: TrackRowComponent },
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

const Template: Story<TrackRowComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  track,
  columns: [TrackListColumns.album, TrackListColumns.count],
};
