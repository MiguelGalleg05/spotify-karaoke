import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserSettingsService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggleControl = new FormControl(false);

  constructor(protected userSettings: UserSettingsService) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.userSettings.darkMode(darkMode);
    });
  }
}
