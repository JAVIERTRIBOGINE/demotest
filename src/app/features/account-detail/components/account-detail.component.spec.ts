import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountDetailComponent } from './account-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedMasterModule } from 'src/app/shared/shared-master/shared-master.module';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadComponent } from '../../account/components/read/read.component';
import { RandomGeneratorService } from 'src/app/core/services/random-generator.service';
import { ErrorState } from 'src/app/core/globalStates/error.state';
import { Observable, of } from 'rxjs';
import { AccountDetailFront } from 'src/app/core/models/account-detail.model';
import { AccountDetailService } from '../services/account-detail.service';

const routes: Routes = [
  { path: 'read', component: ReadComponent },
  { path: 'detail/:id', component: AccountDetailComponent },
  { path: '', redirectTo: 'read', pathMatch: 'full' },
  { path: '**', redirectTo: 'read', pathMatch: 'full' },
];

const mockErrorState = {
  setFailState: () => null,
} as unknown as ErrorState;

const randomMockGeneratorService = {
  getResolvedRandomRate: () => 100,
  randomRate$: of(null) as unknown as Observable<number>,
  randomAccount$: of(null) as unknown as Observable<AccountDetailFront>,
} as unknown as RandomGeneratorService;


const mockAccountDetailService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAccountTransactions: (_id: string) =>
    of({} as unknown as AccountDetailFront[]),
} as AccountDetailService;

describe('AccountDetailComponent', () => {
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let router: Router;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let route: ActivatedRoute;

  let service: AccountDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        MaterialModule,
        SharedMasterModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [AccountDetailComponent, ReadComponent],
      providers: [
        {
          provide: AccountDetailService,
          useValue: mockAccountDetailService,
        },
        {
          provide: RandomGeneratorService,
          useValue: randomMockGeneratorService,
        },
        {
          provide: ErrorState,
          useValue: mockErrorState,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(AccountDetailService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
    spyOn(service, 'getAccountTransactions').and.returnValue(
      of({} as unknown as AccountDetailFront[]),
    );
  });

  it('should create', () => {
    component.masterData = {} as AccountDetailFront;
    expect(component).toBeTruthy();
  });
});
