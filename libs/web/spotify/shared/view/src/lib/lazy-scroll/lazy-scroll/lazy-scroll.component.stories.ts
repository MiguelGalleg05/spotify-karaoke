import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';

import { WebSpotifySharedDirectivesModule } from '@artur-ba/web/spotify/shared/directives';

import { album, playlist } from '../../../../.storybook/sharedData';
import { CardListStrategy } from '../../card/card-list/card-list.strategy';
import { CardListViewMode } from '../../card/dynamic-card-list/dynamic-card-list.component';
import { CardModule } from '../../card/card.module';
import { LazyScrollComponent } from './lazy-scroll.component';

export default {
  component: LazyScrollComponent,
  decorators: [
    moduleMetadata({
      declarations: [LazyScrollComponent],
      imports: [
        CardModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: LazyScrollComponent },
        ]),
        WebSpotifySharedDirectivesModule,
      ],
    }),
  ],
  title: 'Shared/LazyScroll',
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
    CardListStrategy<Partial<SpotifyApi.AlbumObjectSimplified>, string>
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

const Template: Story<LazyScrollComponent> = (args) => ({
  props: {
    ...args,
    newStrategy: new CardListMockStrategy((args as any).cardsCount),
  },
  template: `
  <artur-ba-lazy-scroll>
    <artur-ba-card-list [viewMode]="cardListViewMode" [strategy]="newStrategy">
    </artur-ba-card-list>
  </artur-ba-lazy-scroll>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cardsCount: 49,
  cardListViewMode: CardListViewMode.ALBUM,
};
