import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import * as CardComponentStories from '../card/card.component.stories';
import { CardComponent } from '../card/card.component';
import { CardWrapperComponent } from './card-wrapper.component';

export default {
  component: CardWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardWrapperComponent, CardComponent],
      imports: [
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: CardWrapperComponent },
        ]),
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
      [imageUrl]="cardValue.imageUrl"
      [title]="cardValue.title"
      [subtitle]="cardValue.subtitle"
      [redirectUrl]="cardValue.redirectUrl"
    >
    </artur-ba-card>
  </artur-ba-card-wrapper>
  `,
});

const imageUrl = CardComponentStories.Default.args.imageUrl;

const cardValue = {
  imageUrl,
  title: 'Appetite For Destruction',
  subtitle: "Guns N' Roses",
  redirectUrl: 'album/3I9Z1nDCL4E0cP62flcbI5',
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
