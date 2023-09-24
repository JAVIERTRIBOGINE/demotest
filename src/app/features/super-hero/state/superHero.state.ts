import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Heros } from 'src/app/core/models/heros.model';
import { SUPERHEROS } from './superHero.store';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroState {
  heros$: BehaviorSubject<Heros[]> = new BehaviorSubject<Heros[]>(this.newIdsHeros());
  searchHeros$: BehaviorSubject<Heros[]> = new BehaviorSubject<Heros[]>([]);
  hero$: BehaviorSubject<Heros[]> = new BehaviorSubject<Heros[]>([]);

  get hero() {
    return this.hero$.value;
  }

  get heros() {
    return this.heros$.value;
  }

  constructor() {}

  getHeros(search = false): Observable<Heros[]>{
    return search? this.searchHeros$.asObservable(): this.heros$.asObservable();
  }

  getHero(): Observable<Heros[]>{
    return this.hero$.asObservable();
  }

  getHeroById(id: string): Observable<Heros[]> {
    this.hero$.next(this.heros.filter((item: Heros)=> item.id === id));
    return this.getHero();
  }

  newIdsHeros(): Heros[] {
   return SUPERHEROS.map((item: Heros)=> {return  {id: uuidv4(), name: item.name, movie: item.movie, power: item.power}});
  }

  updateHero(row: Heros): Observable<Heros[]> {
    this.heros$.next(this.heros$.value.map((item: Heros)=> item.id ===  row.id ? row: item));
    this.hero$.next([row]);
    return this.getHeros();
  }

  addHero(row: Heros): Observable<Heros[]> {
    row.id = uuidv4();

    this.heros.push(row);
    this.heros$.next(this.heros);
    return this.getHeros();
  }

  deleteHero(id:string): Observable<Heros[]> {
    this.heros$.next(this.heros.filter((item: Heros) => item.id !== id ));
    return this.getHeros();
  }

  search(name: string) {
    this.searchHeros$.next(this.heros.filter((item: Heros) => item.name?.includes(name) ));
    return this.getHeros(true);
  }
}
