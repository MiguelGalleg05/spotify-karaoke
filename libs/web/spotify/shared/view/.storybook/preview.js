import '@angular/localize/init';
import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#171717' },
    darkClass: 'darkMode',
    light: { ...themes.normal, appBg: '#f0f0f0' },
    stylePreview: true,
  },
};
