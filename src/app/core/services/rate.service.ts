import { ApiV1Service } from 'src/app/core/services/api-v1.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private apiService: ApiV1Service) {}

  getRate(): Observable<any> {
    return this.apiService.getEntityData(
      `${environment.baseUrl}/${environment.entities.rate.url}`,
    );
  }
}
