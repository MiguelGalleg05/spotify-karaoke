import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LanguageModel, LanguageService } from '@artur-ba/shared/service';

@Component({
  selector: 'artur-ba-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  languages: LanguageModel[];
  langControl: FormControl;

  constructor(protected readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.languages = this.languageService.getLanguages();
  }

  selectLanguage(lang: LanguageModel): void {
    this.languageService.setLanguage(lang);
    window.location.reload();
  }
}
