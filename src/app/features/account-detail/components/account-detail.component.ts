import { Component, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, takeUntil, Subject } from 'rxjs';
import { ErrorState } from 'src/app/core/globalStates/error.state';
import {
  ACCOUNT_DETAIL_FIELDS,
  AccountDetailFront,
} from 'src/app/core/models/account-detail.model';
import { AccountDetailService } from '../services/account-detail.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomGeneratorService } from 'src/app/core/services/random-generator.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnDestroy {
  value!: string;
  accountsDetailList!: Observable<AccountDetailFront[]>;
  displayedColumns: string[] = ACCOUNT_DETAIL_FIELDS;
  loading = false;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  failed = false;
  resolvedValues!: AccountDetailFront[];
  testSocket!: number;
  id!: string;
  masterData!: AccountDetailFront;
  mockCount = 1;
  ondestroy$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountDetailService: AccountDetailService,
    private randomGeneratorService: RandomGeneratorService,
    public errorState: ErrorState,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getData();
      console.log('id:', this.id);
    });

    this.randomGeneratorService.randomRate$
      .pipe(takeUntil(this.ondestroy$))
      .subscribe(() => this.getData());
    this.randomGeneratorService.randomAccount$
      .pipe(takeUntil(this.ondestroy$))
      .subscribe(() => this.getData());
  }

  get isLoading() {
    return this.loading;
  }

  getData(): void {
    this.loading = true;

    this.accountsDetailList = this.accountDetailService.getAccountTransactions(
      this.id,
    );
    this.accountsDetailList.subscribe({
      next: (data) => {
        this.loading = false;
        this.resolvedValues = data;
      },
      error: (e) => {
        console.log('errorState:', e);
        this.errorState.setFailState(true);
      },
      complete: () => (this.loading = false),
    });
  }

  ngOnDestroy(): void {
    this.ondestroy$.next();
    this.ondestroy$.complete();
  }
}
