import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient }    from '@angular/common/http';

import { routes } from './app.routes';
import { TaskCRUDServiceService } from './services/task-crudservice.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    TaskCRUDServiceService
  ]
};
