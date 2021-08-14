import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

import {
  SpotifyDataService,
  SpotifyPlayerService,
} from '@artur-ba/web/spotify/shared/service';
import { AbstractLazyListStrategy } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.strategy';
import { ImageModule } from '../../image/image.module';
import { LazyScrollModule } from '../../lazy-scroll/lazy-scroll.module';
import { PlayModule } from '../../play/play.module';
import { WebSpotifySharedPipeModule } from '@artur-ba/web/spotify/shared/pipe';

import {
  TrackListColumns,
  TrackListComponent,
} from '../track-list/track-list.component';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';
import { track } from '../../../../.storybook/sharedData';
import { TrackLazyListComponent } from './track-lazy-list.component';
import { TrackRowComponent } from '../track-row/track-row.component';

export default {
  title: 'TrackList/TrackLazyList',
  component: TrackLazyListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TrackListComponent, TrackRowComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '**', component: TrackLazyListComponent },
        ]),
        ImageModule,
        PlayModule,
        WebSpotifySharedPipeModule,
        LazyScrollModule,
      ],
      providers: [
        { provide: SpotifyDataService, useValue: {} },
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

class TrackListMockStrategy
  implements
    AbstractLazyListStrategy<Partial<SpotifyApi.TrackObjectFull>, string>
{
  protected total;
  protected limit = 20;

  constructor(total: number = 40) {
    this.total = total;
  }

  getData(requestParams, pagination) {
    const offset = pagination.offset || 0;
    const limit = Math.min(this.total - offset, this.limit);
    const items = new Array(this.limit).fill(track);
    const paginationResponse = {
      items,
      limit,
      offset,
      total: this.total,
      href: '',
      next: null,
      previous: null,
    };
    return Promise.resolve(paginationResponse);
  }

  getRequestParams() {
    return 'params';
  }
}

const Template: Story<TrackLazyListComponent> = (args) => ({
  props: {
    ...args,
    strategy: new TrackListMockStrategy((args as any).itemsCount),
  },
  template: `
    <artur-ba-track-lazy-list [columns]="columns" [strategy]="strategy">
    </artur-ba-track-lazy-list>
  `,
});

export const Default = Template.bind({});
Default.args = {
  itemsCount: 40,
  columns: [
    TrackListColumns.image,
    TrackListColumns.title_artist,
    TrackListColumns.album,
    TrackListColumns.time,
  ],
};
