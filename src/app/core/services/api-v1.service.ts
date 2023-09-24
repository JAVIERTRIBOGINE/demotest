import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heros } from '../models/heros.model';
import { SuperHeroState } from 'src/app/features/super-hero/state/superHero.state';
import { VersionState } from '../globalStates/version.state';

@Injectable({
  providedIn: 'root'
})
export class ApiV1Service {
  constructor(
    private http: HttpClient,
    private heroState: SuperHeroState,
    private versionState: VersionState
    ) { }

  getData(url: string): Observable<Heros[]> {
    return this.versionState.switchValue ? this.http.get<Heros[]>(url): this.heroState.getHeros();
    // return   this.http.get<Heros[]>(url)
  }

  getDataById(url: string, id: string): Observable<Heros[]> {
    const params = new HttpParams().set('id', id);
    return  this.versionState.switchValue? this.http.get<Heros[]>(url, {params}): this.heroState.getHeroById(id);

    // return   this.http.get<Heros[]>(url, {params})
  }

  postData(url: string, data: Heros): Observable<Heros[]> {
    return this.versionState.switchValue? this.http.post<Heros[]>(url, data ): this.heroState.addHero(data);
    // return  this.http.post<Heros[]>(url, data )
  }

  patchData(url: string, element: Heros): Observable<Heros[]> {
   return this.versionState.switchValue? this.http.patch<Heros[]>(url + "/" + element['id'],  element): this.heroState.updateHero(element);

  //  return  this.http.patch<Heros[]>(url + "/" + element['id'],  element)
  }

  deleteData(url: string, id: string) {
    return this.versionState.switchValue? this.http.delete(url+"/"+id): this.heroState.deleteHero(id);

    // return  this.http.delete(url+"/"+id)
  }

  searchbyName(url: string, key: string, name: string): Observable<Heros[]> {
    return this.http.get<Heros[]>(url+'?' + key + '_like='+ name);

    // return  this.http.get<Heros[]>(url+'?' + key + '_like='+ name)
  }
}
