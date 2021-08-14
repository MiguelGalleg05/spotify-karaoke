import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

import * as CardComponentStories from '../card/card.component.stories';
import { CardComponent } from '../card/card.component';
import { CardWrapperComponent } from './card-wrapper.component';
import { ImageModule } from '../../image/image.module';
import { PlayModule } from '../../play/play.module';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';

export default {
  component: CardWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardWrapperComponent, CardComponent],
      imports: [
        ImageModule,
        PlayModule,
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: CardWrapperComponent },
        ]),
      ],
      providers: [
        {
          provide: SpotifyPlayerService,
          useClass: SpotifyPlayerServiceMock,
        },
      ],
    }),
  ],
  title: 'Card/CardWrapper',
  argTypes: {
    cardsCount: {
      control: { type: 'number', min: 1 },
    },
  },
} as Meta;

const Template: Story<CardWrapperComponent> = (args) => ({
  props: {
    ...args,
    cardsCountArray: new Array((args as any).cardsCount),
  },
  template: `
  <artur-ba-card-wrapper
    [title]="title"
    [viewMoreRoute]="viewMoreRoute"
    [singleLine]="singleLine"
  >
    <artur-ba-card
      *ngFor="let i of cardsCountArray"
      [images]="cardValue.images"
      [title]="cardValue.title"
      [subtitle]="cardValue.subtitle"
      [redirectUrl]="cardValue.redirectUrl"
      [context_uri]="cardValue.context_uri"
    >
    </artur-ba-card>
  </artur-ba-card-wrapper>
  `,
});

const cardValue = {
  ...CardComponentStories.Default.args,
};

export const Default = Template.bind({});
Default.args = {
  title: 'Albums',
  cardsCount: 9,
  cardValue,
};

export const OneLine = Template.bind({});
OneLine.args = {
  ...Default.args,
  singleLine: true,
};

export const ViewMore = Template.bind({});
ViewMore.args = {
  ...Default.args,
  viewMoreRoute: 'artist/uri/albums',
};
