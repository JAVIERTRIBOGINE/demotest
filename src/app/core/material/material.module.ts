import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule  } from '@angular/material/button';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';

import { MatChipsModule } from '@angular/material/chips';

import { MatMenuModule } from '@angular/material/menu';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

import { MatTableModule } from '@angular/material/table';

import { MatTabsModule } from '@angular/material/tabs';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatDialogModule } from '@angular/material/dialog';

import { MatDividerModule } from '@angular/material/divider';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';

import { MatFormFieldModule } from '@angular/material/form-field';

import {MatPaginatorModule} from '@angular/material/paginator';

const DECLARATIONS = [

    MatSidenavModule,

    MatFormFieldModule,

    MatButtonModule,

    MatListModule,

    MatCardModule,

    MatIconModule,

    MatTableModule,

    MatSlideToggleModule,

    FormsModule,

    ReactiveFormsModule,

    MatChipsModule,

    MatMenuModule,

    MatProgressSpinnerModule,

    MatInputModule,

    MatSelectModule,

    MatTabsModule,

    MatTooltipModule,

    MatDialogModule,

    MatDividerModule,

    MatSnackBarModule,

    MatToolbarModule,

    MatPaginatorModule


];



@NgModule({

    imports: [...DECLARATIONS],

    exports: [...DECLARATIONS],

    providers: []

})

export class MaterialModule { }


