import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

import { Provider } from '@angular/core';

// Injection token for the Http Interceptors multi-provider
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorinterceptorService } from './services/auth/errorinterceptor.service';
import { JwtInterceptorService } from './services/auth/jwt-interceptor.service';

/** Provider for the Noop Interceptor. */
export const noopInterceptorProvider: Provider =[
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorinterceptorService, multi: true },
]
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()),
  provideAnimationsAsync(),
  provideHttpClient(),
  importProvidersFrom(HttpClientModule),
  noopInterceptorProvider,
]
};
