import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiV1Service } from 'src/app/core/services/api-v1.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup = new FormGroup({});
  formColumns: string []=[];
  editValues!: Observable<any>;
  columnsDefined: boolean = false;
  resolvedEditValues!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormComponent>,
    private apiV1: ApiV1Service
    ){
      if (this.data.id) {
        this.apiV1.getDataById(environment.baseUrl + environment.entities.heroes.url, this.data.id).subscribe(
        values => {
          this.resolvedEditValues = values ? values: null;
        })
      } else {
        this.resolvedEditValues = [{
          name: "",
          movie: "",
          power: "",
        }]
      }

      }

    ngOnInit(){}

    getDataById() {
      return this.apiV1.getDataById(environment.baseUrl + environment.entities.heroes.url, this.data.id);
    }

    isFieldInvalid(control: string) {
      return this.form.get(control)!.hasError;
    }

    getErrorMessage(control: string) {
      if (this.form.get(control)?.hasError('minlength')){
        return 'Minimum length: 8 characters';
      }
      return this.form.get(control)!.hasError('required') ? 'please enter password': '';
    }

    submit(event: any){
      let formValues = Object.assign(event);
      if(this.data?.id ) formValues.id = this.data.id;

      this.dialogRef.close(formValues);
    }




}
