import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMasterComponent } from './shared-master.component';
import { Account } from 'src/app/core/models/accounts.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { AccountDetailFront } from 'src/app/core/models/account-detail.model';
import { RandomGeneratorService } from 'src/app/core/services/random-generator.service';
import { AccountService } from 'src/app/features/account/service/account.service';
import { MaterialModule } from 'src/app/core/material/material.module';

const randomMockGeneratorService = {
  getResolvedRandomRate: () => 100,
  randomRate$: of(null) as unknown as Observable<number>,
  randomAccount$: of(null) as unknown as Observable<AccountDetailFront>,
} as unknown as RandomGeneratorService;

const mockAccountService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAccount: (_id: string) => of({} as unknown as Account),
} as AccountService;

describe('SharedMasterComponent', () => {
  let component: SharedMasterComponent;
  let fixture: ComponentFixture<SharedMasterComponent>;
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule],
      declarations: [SharedMasterComponent],
      providers: [
        { provide: AccountService, useValue: mockAccountService },
        {
          provide: RandomGeneratorService,
          useValue: randomMockGeneratorService,
        },
      ],
    });
    fixture = TestBed.createComponent(SharedMasterComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AccountService);
    fixture.detectChanges();
    spyOn(service, 'getAccount').and.returnValue(of({} as unknown as Account));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
