import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import * as CardComponentStories from '../card/card.component.stories';
import { CardComponent } from '../card/card.component';
import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';
import { PlaylistCardDecoratorComponent } from './playlist-card-decorator.component';

export default {
  component: PlaylistCardDecoratorComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        PlaylistCardDecoratorComponent,
        CardComponent,
        CardDecoratorComponent,
      ],
      imports: [
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: PlaylistCardDecoratorComponent },
        ]),
      ],
    }),
  ],
  title: 'Card/Decorator/PlaylistCardDecorator',
} as Meta;

const Template: Story<PlaylistCardDecoratorComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  data: {
    images: [
      {
        url: CardComponentStories.Default.args.imageUrl,
        height: 500,
        width: 500,
      },
    ],
    name: 'Appetite For Destruction',
    owner: { display_name: 'Guns and Roses' },
    uri: 'playlist/3I9Z1nDCL4E0cP62flcbI5',
  },
};

export const OriginalComponent = Template.bind({});
OriginalComponent.args = {
  ...CardComponentStories.Default.args,
};

export const WithBothValues = Template.bind({});
WithBothValues.args = {
  ...OriginalComponent.args,
  ...Default.args,
};
