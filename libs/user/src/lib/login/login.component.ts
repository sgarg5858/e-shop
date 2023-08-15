import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'nx-shop-login',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule,
    MatInputModule,MatFormFieldModule,
    MatButtonModule,MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email],),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  submitForm(event:SubmitEvent)
  {
    console.log(this.loginForm)
  }

}
