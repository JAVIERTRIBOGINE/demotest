import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionState {
  switch$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get switchValue() {
    return this.switch$.value;
  }

  constructor() { }

  getSwitch(): Observable<boolean>{
    return this.switch$.asObservable();
  }

  setSwitch(val: boolean) {
    this.switch$.next(val);
  }

}
