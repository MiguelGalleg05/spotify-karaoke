import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ImageModule } from '../../image/image.module';
import { PlayModule } from '../../play/play.module';
import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';
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
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: TrackRowComponent },
        ]),
        ImageModule,
        PlayModule,
        WebSpotifySharedPipeModule,
      ],
      providers: [
        {
          provide: SpotifyPlayerService,
          useClass: SpotifyPlayerServiceMock,
        },
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
  template: `
    <tr
      style="display: flex; width: 100%"
      artur-ba-track-row
      [columns]="columns"
      [track]="track"
      [count]="count">
    </tr>
  `,
});

export const Default = Template.bind({});
Default.args = {
  track,
  count: 0,
  columns: [TrackListColumns.album, TrackListColumns.title_artist],
};
