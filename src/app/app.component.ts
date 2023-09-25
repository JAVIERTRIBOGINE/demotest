import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, fromEvent, map, merge, of, tap } from 'rxjs';
import { ConnectionState } from './core/globalStates/connection.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'primeCrud';

  offline$!: Observable<boolean>
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

constructor( private connectionState: ConnectionState) {
  this.offline$ = this.connectionState.getOffline();
}

ngOnInit(): void {
  this.checkNetworkStatus();
}
checkNetworkStatus() {
  this.networkStatus = navigator.onLine;
  this.networkStatus$ = merge(
    of(null),
    fromEvent(window, 'online'),
    fromEvent(window, 'offline')
  )
    .pipe(
      map(() => {
     return navigator.onLine;
    }))
    .subscribe(status => {
      console.log('status', status);
      this.connectionState.setOffline(status);
    });
}


ngOnDestroy(): void {
  /**
  * Unsubscribe all subscriptions to avoid memory leak
  */
  // this.subscriptions.forEach(subscription => subscription.unsubscribe());
}
}
