import { Account } from 'src/app/core/models/accounts.model';
import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/features/account/service/account.service';
import { Subject, takeUntil } from 'rxjs';
import { RandomGeneratorService } from 'src/app/core/services/random-generator.service';

@Component({
  selector: 'app-shared-master',
  templateUrl: './shared-master.component.html',
  styleUrls: ['./shared-master.component.scss'],
})
export class SharedMasterComponent implements OnChanges, OnDestroy {
  arrayHeader: { key: string; value: any }[] = [];
  ondestroy$: Subject<void> = new Subject();

  @Input() id!: string;
  headerData!: Account;

  constructor(
    private accountService: AccountService,
    private randomGeneratorService: RandomGeneratorService,
  ) {
    this.randomGeneratorService.randomAccount$
      .pipe(takeUntil(this.ondestroy$))
      .subscribe(() => this.getAccountData());
  }

  ngOnChanges(): void {
    if (this.id) this.getAccountData();
  }

  getAccountData(): void {
    this.accountService
      .getAccount(this.id)
      .pipe(takeUntil(this.ondestroy$))
      .subscribe((data) => {
        console.log('data account id:', data);
        this.headerData = data;
      });
  }
  ngOnDestroy(): void {
    this.ondestroy$.next();
    this.ondestroy$.complete();
  }
}
