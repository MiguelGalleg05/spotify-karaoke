import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  template: '',
})
export abstract class AbstractUriViewComponent implements OnInit, OnDestroy {
  protected subscriptions = new Subscription();

  constructor(protected readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParamsSub = this.route.params.subscribe((params) => {
      this.getUriData(params['uri']);
    });
    this.subscriptions.add(routeParamsSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  protected abstract getUriData(uri: string);
}
