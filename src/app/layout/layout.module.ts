import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { ContentModule } from './modules/content/content.module';
import { LayoutComponent } from './layout.component';
import { ApiV1Service } from '../core/services/api-v1.service';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../features/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('../features/account/account.module').then(
            (m) => m.AccountModule,
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    ContentModule,
    MaterialModule,
    RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [ApiV1Service],
  exports: [RouterModule],
})
export class LayoutModule {}
