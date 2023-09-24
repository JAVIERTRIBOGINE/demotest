import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl("", [ Validators.required]),
    password: new FormControl ("", [Validators.required, Validators.minLength(8)])
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isFieldInvalid(control: string) {
    return this.form.controls[control].hasError;
  }

  getErrorMessage(control: string) {
    if (this.form.get(control)?.hasError('minlength')){
      return 'Minimum length: 8 characters';
    }
    return this.form.get(control)!.hasError('required') ? 'please enter password': '';
  }

  isFormInvalid(){
    return this.form.invalid;
  }

  navigateToDashboard() {
    sessionStorage.setItem("isLogged", "true");
    this.router.navigate(['admin/heroes/read'])
  }

}
