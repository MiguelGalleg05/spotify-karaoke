import { Component, forwardRef, Input } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterTestingModule } from '@angular/router/testing';

import { AbstractListComponent } from '../abstract-list/abstract-list.component';
import { AlbumCardComponent } from '../album-card/album-card.component';
import { CardWrapperComponent } from '../card-wrapper/card-wrapper.component';
import { IndefiniteScrollComponent } from './indefinite-scroll.component';

@Component({
  selector: 'artur-ba-mock-list',
  template: `
    <artur-ba-card-wrapper title="title">
      <artur-ba-album-card *ngFor="let album of data" [album]="album">
      </artur-ba-album-card>
    </artur-ba-card-wrapper>
  `,
  providers: [
    {
      provide: AbstractListComponent,
      useExisting: forwardRef(() => MockListComponent),
    },
  ],
})
class MockListComponent extends AbstractListComponent<unknown> {
  @Input() cardsCount: number;

  albumCard = {
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
  };

  getData(uri, paginate) {
    paginate.offset = paginate.offset || 0;
    paginate.limit = paginate.limit || 20;
    paginate.total = this.cardsCount;
    const max = Math.min(paginate.offset + paginate.limit, paginate.total);
    const items = new Array(this.cardsCount)
      .fill(this.albumCard)
      .slice(paginate.offset, max);

    return Promise.resolve({ ...paginate, items });
  }
}

export default {
  component: IndefiniteScrollComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IndefiniteScrollComponent,
        CardWrapperComponent,
        AlbumCardComponent,
        MockListComponent,
      ],
      imports: [
        MatCardModule,
        MatProgressSpinnerModule,
        RouterTestingModule.withRoutes([
          { path: '**', component: IndefiniteScrollComponent },
        ]),
      ],
    }),
  ],
  title: 'IndefiniteScrollComponent',
  argTypes: {
    cardsCount: {
      control: { type: 'number', min: 1 },
    },
  },
} as Meta;

const Template: Story<IndefiniteScrollComponent> = (args) => ({
  props: {
    ...args,
  },
  template: `
  <artur-ba-indefinite-scroll>
    <artur-ba-mock-list [cardsCount]="cardsCount">
    </artur-ba-mock-list>
  </artur-ba-indefinite-scroll>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cardsCount: 29,
};
