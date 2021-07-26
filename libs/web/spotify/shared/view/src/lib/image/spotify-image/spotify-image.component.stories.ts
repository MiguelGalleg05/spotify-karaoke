import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { imagesArray } from '../../../../.storybook/sharedData';
import { SpotifyImageComponent } from './spotify-image.component';

export default {
  title: 'Image/Image',
  component: SpotifyImageComponent,
  decorators: [
    moduleMetadata({
      declarations: [SpotifyImageComponent],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story<SpotifyImageComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  images: imagesArray,
  alt: 'alt text',
};
