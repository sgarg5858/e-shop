import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Store } from '@ngrx/store';
import { LoginActions } from '../store/login.actions';
import { loggingIn, token } from '../store/login.selectors';
import { autoLoginEffect } from '../store/login.effects';

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
export class LoginComponent implements OnInit {

  store = inject(Store);


  ngOnInit(): void {
  this.store.dispatch(LoginActions.checkSessionStorage())
  }

  loginForm = new FormGroup({
    username: new FormControl('mor_2314',{nonNullable:true,validators:[Validators.required]},),
    password: new FormControl('83r5^_',{nonNullable:true, validators:[Validators.required,Validators.minLength(4)]})
  })
  submitForm()
  {
    if(!this.loginForm.valid)
    return;
    const username=this.loginForm.controls.username.value;
    const password=this.loginForm.controls.password.value;
    this.store.dispatch(LoginActions.makeLoginRequest({username,password}))
  }

}
