import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiV1Service } from '../core/services/api-v1.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  value!: string;
  heroesList!: Observable<any>;
displayedColumns: string[] = ['id', 'name', 'power', 'movie', 'actions'];
  loading: boolean = false;
  isShowing: boolean = false;
  links: string[] = ['heroes'];
  constructor(private apiV1: ApiV1Service, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toogleSideNav() {
    this.isShowing = !this.isShowing;
  }

}
