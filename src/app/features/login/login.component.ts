import { ApiV1Service } from '../../core/services/api-v1.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(
    private router: Router,
    private apiService: ApiV1Service,
  ) {}

  isFieldInvalid(control: string) {
    return this.form.controls[control].hasError;
  }

  getErrorMessage(control: string) {
    if (this.form.get(control)?.hasError('minlength')) {
      return 'Minimum length: 8 characters';
    }
    return this.form.get(control)?.hasError('required')
      ? 'please enter password'
      : '';
  }

  isFormInvalid() {
    return this.form.invalid;
  }

  navigateToDashboard() {
    sessionStorage.setItem('isLogged', 'true');
    this.router.navigate(['admin']);
  }
}
