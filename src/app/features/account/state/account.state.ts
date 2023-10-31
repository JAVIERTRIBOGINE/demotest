import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/core/models/accounts.model';
import { AccountService } from '../service/account.service';

@Injectable({
  providedIn: 'root',
})
export class AccountState {
  accounts$: Observable<Account[]> = this.accountService.getAccounts();

  constructor(private accountService: AccountService) {}

  getAccount$(): Observable<Account[]> {
    return this.accounts$;
  }
}
