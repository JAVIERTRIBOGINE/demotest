import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/core/models/accounts.model';
import { ApiV1Service } from 'src/app/core/services/api-v1.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private apiService: ApiV1Service) {}

  getAccounts(): Observable<Account[]> {
    return this.apiService.getEntityData(
      `${environment.baseUrl}/${environment.entities.accounts.url}`,
    );
  }

  getAccount(id: string): Observable<Account> {
    return this.apiService.getEntityDataById(
      `${environment.baseUrl}/${environment.entities.accounts.url}/${id}`,
    );
  }

  patchAccount(
    id: string,
    data: Partial<Account>,
  ): Observable<Partial<Account>> {
    return this.apiService.patchEntity<Partial<Account>>(
      `${environment.baseUrl}/${environment.entities.accountDetails.url}/:${id}`,
      data,
    );
  }

  // postAccount(data: Account): Observable<Account> {
  //   return this.apiService.postEntity<Account>(`${environment.baseUrl}/${environment.entities.accountDetails.url}`, data);
  // }
}
