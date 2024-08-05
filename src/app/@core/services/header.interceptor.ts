import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const Authorization = localStorage.getItem('token')
      ? `Bearer ${localStorage.getItem('token')}`
      : '';
    if (request.url.includes('api/v1')) {
      request = request.clone({
        setHeaders: {
          Authorization,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    }
    return next.handle(request);
  }
}
