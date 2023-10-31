import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReadComponent } from './components/read/read.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountDetailComponent } from '../account-detail/components/account-detail.component';
import { SharedMasterModule } from 'src/app/shared/shared-master/shared-master.module';

const routes: Routes = [
  { path: 'read', component: ReadComponent },
  { path: 'detail/:id', component: AccountDetailComponent },
  { path: '', redirectTo: 'read', pathMatch: 'full' },
  { path: '**', redirectTo: 'read', pathMatch: 'full' },
];

@NgModule({
  declarations: [ReadComponent, AccountDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    SharedMasterModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AccountModule {}
