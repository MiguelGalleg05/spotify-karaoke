import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

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
  title: 'CardWrapperComponent',
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

export const Default = Template.bind({});
Default.args = {
  title: 'Albums',
  viewMoreRoute: 'artist/uri/albums',
  singleLine: false,
  cardsCount: 9,
  cardValue: {
    imageUrl: 'https://source.unsplash.com/random/500x500',
    title: 'Appetite For Destruction',
    subtitle: "Guns N' Roses",
    redirectUrl: 'album/3I9Z1nDCL4E0cP62flcbI5',
  },
};
