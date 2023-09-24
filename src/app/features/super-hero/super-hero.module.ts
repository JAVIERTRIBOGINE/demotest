import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SuperHeroComponent } from './super-hero.component';
import { ReadComponent } from './components/read/read.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: '', component: SuperHeroComponent},
  { path: "read", component: ReadComponent},
  { path:"", redirectTo: "read", pathMatch: "full"},
  { path:"**", redirectTo: "read", pathMatch: "full"}
]

@NgModule({
  declarations: [
    ReadComponent,
    FormComponent
  ],
  imports: [
    SharedModule, CommonModule, MaterialModule, RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class SuperHeroModule { }
