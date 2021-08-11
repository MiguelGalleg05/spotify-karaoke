import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';

import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { album, playlist } from '../../../../.storybook/sharedData';
import { AbstractLazyListStrategy } from '../../lazy-scroll/abstract-lazy-list/abstract-lazy-list.strategy';
import { CardLazyListComponent } from './card-lazy-list.component';
import { CardListViewMode } from '../../card/dynamic-card-list/dynamic-card-list.component';
import { CardModule } from '../../card/card.module';

export default {
  component: CardLazyListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CardModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: CardLazyListComponent },
        ]),
        WebSpotifySharedDirectivesModule,
      ],
    }),
  ],
  title: 'Card/LazyList',
  argTypes: {
    cardsCount: {
      control: { type: 'number', min: 1 },
    },
    cardListViewMode: {
      control: {
        options: [
          ...Object.keys(CardListViewMode).map((a) => CardListViewMode[a]),
        ],
        type: 'radio',
      },
    },
  },
} as Meta;

class CardListMockStrategy
  implements
    AbstractLazyListStrategy<Partial<SpotifyApi.AlbumObjectSimplified>, string>
{
  protected total = 40;
  protected limit = 20;

  constructor(total: number) {
    this.total = total;
  }

  getData(requestParams, pagination) {
    const offset = pagination.offset || 0;
    const limit = Math.min(this.total - offset, this.limit);
    const items = new Array(this.limit).fill({ ...album, ...playlist });
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

const Template: Story<
  CardLazyListComponent<SpotifyApi.AlbumObjectSimplified, string>
> = (args) => ({
  props: {
    ...args,
    newStrategy: new CardListMockStrategy((args as any).cardsCount),
  },
  template: `
    <artur-ba-card-lazy-list [viewMode]="cardListViewMode" [strategy]="newStrategy">
    </artur-ba-card-lazy-list>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cardsCount: 49,
  cardListViewMode: CardListViewMode.ALBUM,
};

export const Playlist = Template.bind({});
Playlist.args = {
  cardsCount: 49,
  cardListViewMode: CardListViewMode.PLAYLIST,
};
