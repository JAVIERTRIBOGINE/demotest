import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            console.error('An 401 error occurred:', error);

            // Handle unauthorized (e.g., redirect to login)
          } else if (error.status === 404) {
            console.error('An 404 error occurred:', error);
            // Handle not found
          } else {
            // Handle other errors
            console.error('An error occurred:', error);
          }
        }

        // Re-throw the error to propagate it to the subscriber
        return throwError(error);
      }),
    );
  }
}
