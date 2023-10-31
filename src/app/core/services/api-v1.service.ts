import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiV1Service {
  constructor(private http: HttpClient) {}

  getEntityData<T>(url: string, id?: string): Observable<T[]> {
    return id ? this.http.get<T[]>(url + `/${id}`) : this.http.get<T[]>(url);
  }

  getEntityDataById<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  patchEntity<T>(url: string, data: Partial<T>): Observable<T> {
    return this.http.patch<T>(url, data);
  }

  postEntity<T>(url: string, data: T): Observable<T> {
    return this.http.post<T>(url, data);
  }
}
