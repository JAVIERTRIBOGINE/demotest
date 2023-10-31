import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccountGroup } from 'src/app/core/models/accounts.model';
import { PROPERTIES_FIELDS_DTO } from 'src/app/core/models/fields-properties.model';

@Component({
  selector: 'app-shared-read',
  templateUrl: './shared-read.component.html',
  styleUrls: ['./shared-read.component.scss'],
})
export class SharedReadComponent implements OnInit, OnChanges, AfterViewInit {
  columnsTest!: string[];
  @Input() set columns(value: string[]) {
    this.columnsTest = value;
  }
  @Output() navigate: EventEmitter<AccountGroup> = new EventEmitter();
  @Input() data!: AccountGroup[] | null;
  @Input() isLoadingData!: boolean;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [2, 5, 10];
  pageSize = 10;
  dataSource: MatTableDataSource<AccountGroup, MatPaginator> =
    new MatTableDataSource<AccountGroup, MatPaginator>();

  get isLoading() {
    return this.isLoadingData;
  }

  get thereIsData() {
    return !!this.getData && this.getData.length > 0;
  }

  get getData() {
    return this.data;
  }

  ngOnInit(): void {
    if (this.data) {
      this.dataSource.data = this.data;
      this.dataSource.paginator = this.paginator;
    }
  }

  public getPropertyFieldDto(col: string): string {
    return PROPERTIES_FIELDS_DTO[col];
  }

  detailAction(event: AccountGroup) {
    this.navigate.next(event);
  }

  ngOnChanges() {
    if (this.data) {
      this.dataSource.data = this.data;
      this.dataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = this.data;
    }
  }
}
