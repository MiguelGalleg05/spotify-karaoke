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
  imageUrl: 'https://source.unsplash.com/random/500x500',
  title: 'Appetite For Destruction',
  subtitle: "Guns N' Roses",
  redirectUrl: 'album/3I9Z1nDCL4E0cP62flcbI5',
};
