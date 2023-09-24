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
    path: '', component: LayoutComponent,
    children: [
    {
        path: 'heroes',
        loadChildren: () => import('../features/super-hero/super-hero.module').then(m => m.SuperHeroModule)
      }
      ,
      {
        path: '', redirectTo: 'heroes', pathMatch: "full"
      }
    ]
  },
  
];

@NgModule({
  declarations: [
    LayoutComponent],
  imports: [
    ContentModule,
    MaterialModule,
    RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [
    ApiV1Service
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutModule { }
