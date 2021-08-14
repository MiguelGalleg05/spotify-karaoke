import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { SpotifyPlayerService } from '@artur-ba/web/spotify/shared/service';

import * as CardComponentStories from '../card/card.component.stories';
import { album } from '../../../../.storybook/sharedData';
import { AlbumCardDecoratorComponent } from './album-card-decorator.component';
import { CardComponent } from '../card/card.component';
import { CardDecoratorComponent } from '../card-decorator/card-decorator.component';
import { ImageModule } from '../../image/image.module';
import { PlayModule } from '../../play/play.module';
import { SpotifyPlayerServiceMock } from '../../../../.storybook/sharedMock';

export default {
  component: AlbumCardDecoratorComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AlbumCardDecoratorComponent,
        CardComponent,
        CardDecoratorComponent,
      ],
      imports: [
        ImageModule,
        PlayModule,
        MatCardModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: AlbumCardDecoratorComponent },
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
  title: 'Card/Decorator/AlbumCardDecorator',
} as Meta;

const Template: Story<AlbumCardDecoratorComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  data: album,
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
