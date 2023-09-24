import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.scss']

})
export class SharedFormComponent implements OnInit {
  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter<any>()
  form: FormGroup = new FormGroup({});
  @Input() formColumns: string []=[];
  @Input() editValues!: any;
  columnsDefined: boolean = false;
  constructor(){}

    ngOnInit(){
      this.createForm(this.editValues);
    }

    createForm(row: any){
        for (let item in row) {
        this.form.addControl(item, new FormControl( row[item]? row[item]:'', [Validators.required] ) );
        if( item === 'id') this.form.get(item)?.disable();
        this.columnsDefined = true;
      }
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

    onSubmit(){
      let formValues = Object.assign(this.form.value);

      this.onSubmitEvent.next(formValues);
    }


    isFormInvalid() {
      return this.form!.invalid;
    }

    public isDisabled(key: unknown) {
      return key === 'id'
    }



}
