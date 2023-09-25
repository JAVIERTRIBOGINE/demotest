import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionState {
  online$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get onlineValue() {
    return this.online$.value;
  }

  constructor() { }

  getOffline(): Observable<boolean>{
    return this.online$.asObservable();
  }

  setOffline(val: boolean) {
    this.online$.next(val);
  }

}
