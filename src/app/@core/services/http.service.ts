import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(endPoint: string, options: any): Observable<T> {
    return this.http.get<T>(endPoint, options).pipe(
      tap((response: any) => response),
      catchError((err) => throwError(() => err)),
    );
  }

  post<T>(endPoint: string, body: any, options: any): Observable<T> {
    return this.http.post<T>(endPoint, body, options).pipe(
      tap((response: any) => response),
      catchError((err) => throwError(() => err)),
    );
  }

  patch<T>(endPoint: string, body: any, options: any): Observable<T> {
    return this.http.patch<T>(endPoint, body, options).pipe(
      tap((response: any) => response),
      catchError((err) => throwError(() => err)),
    );
  }
}
