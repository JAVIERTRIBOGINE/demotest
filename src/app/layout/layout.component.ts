import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  value!: string;
  heroesList!: Observable<unknown>;
  displayedColumns: string[] = ['id', 'name', 'power', 'movie', 'actions'];
  loading = false;
  isShowing = false;
  links: string[] = ['heroes'];
  constructor(public dialog: MatDialog) {}

  toogleSideNav() {
    this.isShowing = !this.isShowing;
  }
}
