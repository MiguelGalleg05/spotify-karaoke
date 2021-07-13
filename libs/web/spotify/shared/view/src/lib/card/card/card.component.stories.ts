import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { CardComponent } from './card.component';

export default {
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: CardComponent },
        ]),
      ],
    }),
  ],
  title: 'Card/Card',
} as Meta;

const actionsData = {
  onClickTask: action('on click'),
};

const Template: Story<CardComponent> = (args) => ({
  props: {
    ...args,
    click: actionsData.onClickTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    'https://images.unsplash.com/photo-1625640871146-f1cdbbfb5c13?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTA2Mg&ixlib=rb-1.2.1&q=80&w=500',
  title: 'Appetite For Destruction',
  subtitle: "Guns N' Roses",
  redirectUrl: 'album/3I9Z1nDCL4E0cP62flcbI5',
};

export const HorizontalImage = Template.bind({});
HorizontalImage.args = {
  ...Default.args,
  imageUrl:
    'https://images.unsplash.com/photo-1624542315822-f2c7bc3763e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTU1Nw&ixlib=rb-1.2.1&q=80&w=1100',
};

export const VerticalImage = Template.bind({});
VerticalImage.args = {
  ...Default.args,
  imageUrl:
    'https://images.unsplash.com/photo-1625230255604-7efe3b6af256?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTYzNw&ixlib=rb-1.2.1&q=80&w=500',
};

export const SmallImage = Template.bind({});
SmallImage.args = {
  ...Default.args,
  imageUrl:
    'https://images.unsplash.com/photo-1625741333766-ed5116195b1b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=70&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjE2MTY4MA&ixlib=rb-1.2.1&q=80&w=70',
};
