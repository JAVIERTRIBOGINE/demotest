import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heros } from '../models/heros.model';

@Injectable({
  providedIn: 'root'
})
export class ApiV1Service {
  constructor(
    private http: HttpClient,
    ) { }

  getData(url: string): Observable<Heros[]> {
    return   this.http.get<Heros[]>(url)
  }

  getDataById(url: string, id: string): Observable<Heros[]> {
    const params = new HttpParams().set('id', id);
    return   this.http.get<Heros[]>(url, {params})
  }

  postData(url: string, data: Heros): Observable<Heros[]> {
    return  this.http.post<Heros[]>(url, data )
  }

  patchData(url: string, element: Heros): Observable<Heros[]> {
   return  this.http.patch<Heros[]>(url + "/" + element['id'],  element)
  }

  deleteData(url: string, id: string) {
    return  this.http.delete(url+"/"+id)
  }

  searchbyName(url: string, key: string, name: string): Observable<Heros[]> {
    return  this.http.get<Heros[]>(url+'?' + key + '_like='+ name)
  }
}
