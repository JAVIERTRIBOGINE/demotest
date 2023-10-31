import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailFront } from 'src/app/core/models/account-detail.model';
import { AccountGroup } from 'src/app/core/models/accounts.model';
import { ApiV1Service } from 'src/app/core/services/api-v1.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountDetailService {
  masterData!: AccountGroup;
  constructor(private apiService: ApiV1Service) {}

  setMasterData(data: AccountGroup): void {
    this.masterData = data;
  }

  getMasterData(): AccountGroup {
    return this.masterData ?? null;
  }

  getAccountTransactions(id: string): Observable<AccountDetailFront[]> {
    return this.apiService.getEntityData<AccountDetailFront>(
      `${environment.baseUrl}/${environment.entities.accountDetails.url}`,
      id,
    );
  }

  postAccount(data: AccountDetailFront): Observable<AccountDetailFront> {
    return this.apiService.postEntity<AccountDetailFront>(
      `${environment.baseUrl}/${environment.entities.accountDetails.url}`,
      data,
    );
  }
}
