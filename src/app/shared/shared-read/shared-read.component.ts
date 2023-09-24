import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Heros } from 'src/app/core/models/heros.model';

@Component({
  selector: 'app-shared-read',
  templateUrl: './shared-read.component.html',
  styleUrls: ['./shared-read.component.scss']
})
export class SharedReadComponent implements OnInit, AfterViewInit {
  @Input() entity!: string;
  columnsTest!: string[];
  @Input() set columns(value:string[]) {
    this.columnsTest = value;
  };
  @Input() data: Observable<Heros[]>= of([]);
  @Input() isLoadingData!: boolean;

  @Output() onFilterValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeleteAction: EventEmitter<string> = new EventEmitter<string>();

  @Output() onEditAction: EventEmitter<object> = new EventEmitter<object>();
  @Output() onAddAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[]= [ 2, 5, 20 ];
  pageSize: number = 2;
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
    ) {}

    get thereIsData() {
      return this.dataSource?.data ;
    }

    ngOnInit(): void {
      // this.dataSource
      this.data?.subscribe(data =>
        {
          this.dataSource  = new MatTableDataSource<any>(data);
          this.cd.markForCheck();
          this.dataSource.data = data;
        }
        );
  }

  setFilterValue(filterValue: any) {

    const filterName = (filterValue.target as HTMLInputElement).value
    this.dataSource.filter = filterName;
  }

  addAction() {
    this.onAddAction.emit(true);
  }

  editAction(element: object) {
    this.onEditAction.emit(element);
  }

  deleteAction(id: string) {
    this.onDeleteAction.emit(id);
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }
}
