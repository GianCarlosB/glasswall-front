import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { addBackToTop } from 'vanilla-back-to-top'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

addBackToTop({
  diameter: 50,
  backgroundColor: '#343A40',
  textColor: '#fff'
});