import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './core/guards/login-guard.guard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    canActivate: [LoginGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  }
  ,
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
