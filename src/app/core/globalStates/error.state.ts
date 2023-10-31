import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorState {
  fail$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get fail() {
    return this.fail$.value;
  }

  getFailState(): Observable<boolean> {
    return this.fail$.asObservable();
  }

  setFailState(val: boolean): void {
    this.fail$.next(val);
  }
}
