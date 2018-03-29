import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get email() {
    return this.form.get('account.email');
  }

  get password() {
    return this.form.get('account.password');
  }
}
