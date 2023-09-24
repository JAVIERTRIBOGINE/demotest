import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
