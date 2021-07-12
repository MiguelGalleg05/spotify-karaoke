import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { AlbumCardComponent } from './album-card.component';
import mdx from './album-card.component.mdx';

export default {
  component: AlbumCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [AlbumCardComponent],
      imports: [
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: AlbumCardComponent },
        ]),
      ],
    }),
  ],
  title: 'Card/Extended/AlbumCard',
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const Template: Story<AlbumCardComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  album: {
    images: [
      {
        url: 'https://source.unsplash.com/random/500x500',
        height: 500,
        width: 500,
      },
    ],
    name: 'Appetite For Destruction',
    release_date: '1998-10-10',
    uri: 'album/3I9Z1nDCL4E0cP62flcbI5',
  },
};
