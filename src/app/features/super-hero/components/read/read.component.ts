import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ApiV1Service } from 'src/app/core/services/api-v1.service';
import { SharedDeleteComponent } from 'src/app/shared/shared-delete/shared-delete.component';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../form/form.component';
import { Heros } from 'src/app/core/models/heros.model';
import { ErrorState } from 'src/app/core/globalStates/error.state';
import { VersionState } from 'src/app/core/globalStates/version.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {
  value!: string;
  heroesList!: Observable<Heros[]>;
  displayedColumns: string[] = ['id', 'name', 'power', 'movie', 'actions'];
  loading: boolean = false;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  failed: boolean = false;
  resolvedValues!: Heros[];



  constructor(
    private apiV1: ApiV1Service,
    public dialog: MatDialog,
    private versionState: VersionState,
    public errorState: ErrorState
    ) {
      this.versionState.getSwitch().subscribe(()=> this.getData());
     }

  ngOnInit(): void {
    this.getData()
  }

  get isLoading() {
    return this.loading;
  }

  getData(): void {
    this.loading = true;

    this.heroesList = this.apiV1.getData(environment.baseUrl + environment.entities.heroes.url)
    .pipe(
      delay(1000),
      tap(() => this.loading$.next(false))
    );
    this.heroesList.subscribe({
      next: (data) => {
        this.loading = false;
        this.resolvedValues = data}
    ,
    error: () => this.errorState.setFailState(true),
    complete: () => this.loading = false
   } )

  }

  deleteMessage(event: string) {
    const dialogRef = this.dialog.open( SharedDeleteComponent, {
      data: {id: event}
    });

    dialogRef.afterClosed().subscribe(result => {
      result? this.delete(event): console.log('The dialog was closed with no deletion');
    })
  }

  editForm(event: any) {

    const dialogRef = this.dialog.open( FormComponent, {
      data: {
        columns: this.displayedColumns,
        id: event.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
          !!result ? this.update(result) : console.log('The dialog was closed ');
    })
  }

  addForm(add: boolean){
    const dialogRef = this.dialog.open( FormComponent, {
      data: {
        columns: this.displayedColumns,
        editValues: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      !!result ? this.add(result) : console.log('The dialog was closed ');
    })
  }

  update(data: Heros){
    this.loading = true;
    this.apiV1.patchData(environment.baseUrl + environment.entities.heroes.url, data).subscribe(
      {
        complete: () => this.getData(),
        error: () => this.errorState.setFailState(true)
      }
    )
  }

  add(data: object){
    this.loading = true;
    this.apiV1.postData(environment.baseUrl + environment.entities.heroes.url, data).subscribe(
      {
        complete: () => this.getData(),
        error: () => this.errorState.setFailState(true)
      }
    )
  }

  delete(id:string){
    this.loading = true;
    this.apiV1.deleteData(environment.baseUrl + environment.entities.heroes.url, id).subscribe(
      {
        complete: () => this.getData(),
        error: () => this.errorState.setFailState(true)
      }
    );
  }

  applyFilter(event: string){

    const filterName = event;
    if (filterName.length > 2 && filterName.length !== 0  ) this.heroesList =  this.apiV1.searchbyName(environment.baseUrl + environment.entities.heroes.url, environment.entities.heroes.filterKey, filterName);
    else this.getData();

  }
}



