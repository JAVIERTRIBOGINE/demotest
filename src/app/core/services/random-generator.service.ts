import { Injectable } from '@angular/core';
import { AccountDetailService } from 'src/app/features/account-detail/services/account-detail.service';
import { RateService } from './rate.service';
import {
  BehaviorSubject,
  Observable,
  Subject,
  interval,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { ACCOUNT_DETAIL_INTERVAL, RATE_INTERVAL } from '../constants/account';
import { Rate } from '../models/rate.model';
import {
  AccountDetailFront,
  createAccountDetailMockData,
  generateRandomAlphanumeric,
} from '../models/account-detail.model';

@Injectable({
  providedIn: 'root',
})
export class RandomGeneratorService {
  randomRate$: Observable<number> = new Observable<number>();
  randomAccount$: Observable<AccountDetailFront> =
    new Subject<AccountDetailFront>();
  rateSub: BehaviorSubject<number> = new BehaviorSubject<number>(3400);
  mockCount!: number;
  constructor(
    private accounDetailService: AccountDetailService,
    private rateService: RateService,
  ) {
    this.randomRate$ = interval(RATE_INTERVAL * 1000).pipe(
      switchMap(() => this.rateService.getRate()),
      map((rateObj: Rate) => rateObj.rate),
      tap((data: number) => this.rateSub.next(data)),
    );

    this.randomAccount$ = interval(ACCOUNT_DETAIL_INTERVAL * 1000).pipe(
      switchMap(() => {
        const TransactionRandomValue: number = Math.floor(Math.random() * 10);
        const AccountRandomValue: number = Math.floor(Math.random() * 10);
        return this.accounDetailService.postAccount(
          createAccountDetailMockData(
            generateRandomAlphanumeric(),
            TransactionRandomValue > 2 ? 2 : 0,
            TransactionRandomValue <= 2 ? 1 : 0,
            AccountRandomValue > 3 ? 7 : 6,
          ),
        );
      }),
    );
  }
  getResolvedRandomRate() {
    return this.rateSub.value;
  }
}
