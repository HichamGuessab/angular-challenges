import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>(
  'https://jsonplaceholder.typicode.com',
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: API_URL, useValue: 'https://jsonplaceholder.typicode.com' },
  ],
};
