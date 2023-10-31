import { AccountDetailService } from './../../../account-detail/services/account-detail.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import {
  ACCOUNT_FIELDS,
  Account,
  AccountGroup,
} from 'src/app/core/models/accounts.model';
import { ErrorState } from 'src/app/core/globalStates/error.state';
import { AccountState } from '../../state/account.state';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomGeneratorService } from 'src/app/core/services/random-generator.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnDestroy, OnInit {
  value!: string;
  accountsList!: Observable<Account[]>;
  displayedColumns: string[] = ACCOUNT_FIELDS;
  loading = false;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  failed = false;
  resolvedValues!: Account[];
  ondestroy$: Subject<void> = new Subject();

  constructor(
    private accountsState: AccountState,
    private accountDetailService: AccountDetailService,
    private randomGeneratorService: RandomGeneratorService,
    public dialog: MatDialog,
    public errorState: ErrorState,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.loading = true;
    this.randomGeneratorService.randomRate$
      .pipe(takeUntil(this.ondestroy$))
      .subscribe(() => this.getData());
    this.randomGeneratorService.randomAccount$
      .pipe(takeUntil(this.ondestroy$))
      .subscribe(() => this.getData());
  }
  ngOnInit(): void {
    this.getData();
  }

  get isLoading() {
    return this.loading;
  }

  getData(): void {
    this.accountsList = this.accountsState.getAccount$();
    this.accountsList.subscribe({
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

  navigate(data: AccountGroup) {
    console.log('url: ', this.router.url);
    this.accountDetailService.setMasterData(data ?? null);
    this.router.navigate(['../detail', data?.id], {
      relativeTo: this.route,
      state: data ?? {},
    });
  }

  ngOnDestroy(): void {
    this.ondestroy$.next();
    this.ondestroy$.complete();
  }
}
