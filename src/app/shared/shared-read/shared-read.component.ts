import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ErrorState } from 'src/app/core/globalStates/error.state';
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
  @Input() data!:Heros[] | null;
  @Input() isLoadingData!: boolean;
  // isLoadingData: boolean = false;
  // @Output() onFilterValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeleteAction: EventEmitter<string> = new EventEmitter<string>();

  @Output() onEditAction: EventEmitter<object> = new EventEmitter<object>();
  @Output() onAddAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[]= [ 2, 5, 20 ];
  pageSize: number = 2;
  dataSource: MatTableDataSource<Heros|null, MatPaginator> = new MatTableDataSource<Heros|null, MatPaginator>();

  constructor(
    public dialog: MatDialog,
    // private cd: ChangeDetectorRef,
    private errorState: ErrorState
    ) {

      // this.isLoadingData = true;
      // this.data?.subscribe({
      //   next: (data) => {
      //    console.log("oninit de shared-read");
      //   this.cd.markForCheck();
      //   // this.dataSource.data = data;
      //   this.isLoadingData = false;
      // },
      // error:   () => this.errorState.setFailState(true),
      // complete: () => this.isLoadingData = false
      // })
    }

    get thereIsData() {
      return !!this.getData && this.getData.length > 0;
    }

    get getData() {
      return this.data;
    }

    ngOnInit(): void {
      if (this.data) {
        this.dataSource.data = this.data
        this.dataSource.paginator = this.paginator;
      };
      // this.dataSource.data = this.data;

      // this.isLoadingData = true;
      // this.data.subscribe({
      //   next: (data) => {
      //    console.log("oninit de shared-read");
      //   this.cd.markForCheck();
      //   this.dataSource.data = data;
      //   this.isLoadingData = false;
      // },
      // error:   () => this.errorState.setFailState(true),
      // complete: () => this.isLoadingData = false
      // })
  }


  setFilterValue(filterValue: any) {
    const filterName = (filterValue.target as HTMLInputElement).value
    this.dataSource.filter = filterName;
  }

  addAction() {
    this.onAddAction.emit(true);
  }

  ngOnChanges() {
    // this.isLoadingData = true;
    if (this.data) {
      this.dataSource.data = this.data
      this.dataSource.paginator = this.paginator;
    };
    // setTimeout(() => this.isLoadingData = false, 1000);

  }

  editAction(element: object) {
    this.onEditAction.emit(element);
  }

  deleteAction(id: string) {
    this.onDeleteAction.emit(id);
  }

  ngAfterViewInit(): void {
    if (this.data) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = this.data
    };
  }
}
