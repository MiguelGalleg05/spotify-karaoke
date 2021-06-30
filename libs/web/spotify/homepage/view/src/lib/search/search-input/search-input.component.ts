import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'artur-ba-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  searchForm = new FormControl('');

  @Output() search = new EventEmitter<string>();

  protected readonly subscriptions: Subscription[] = [];
  protected readonly timeoutTime = 1000;
  protected timeoutHandle: ReturnType<typeof setTimeout>;
  protected previousSearch = '';

  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initQuery();
    this.initFormFollow();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSubmit(): boolean {
    const queryParams = { q: encodeURI(this.searchForm.value) };
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
    });
    return false;
  }

  protected initQuery(): void {
    this.subscriptions.push(
      this.route.queryParams
        .pipe(
          map((params) => params.q),
          filter((q) => q !== undefined)
        )
        .subscribe((q) => {
          this.searchForm.patchValue(decodeURI(q) || '');
          this.searchHandle();
        })
    );
  }

  protected initFormFollow(): void {
    this.searchForm.valueChanges.subscribe(() => {
      if (this.timeoutHandle) {
        delete this.timeoutHandle;
      }
      this.timeoutHandle = setTimeout(() => {
        this.onSubmit();
      }, this.timeoutTime);
    });
  }

  protected searchHandle(): void {
    if (this.searchForm.value === this.previousSearch) {
      return;
    }
    this.previousSearch = this.searchForm.value;

    if (this.previousSearch.length < 1) {
      return;
    }
    this.search.emit(this.searchForm.value);
  }
}
