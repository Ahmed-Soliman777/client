import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormField, MatInputModule, MatLabel } from '@angular/material/input';
import { Auth } from '../../Services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [MatInputModule, MatFormField, MatLabel, FormsModule, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private authServices: Auth) {}
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  register() {
    // console.log(this.registerForm.value);
    let value = this.registerForm.value;
    this.authServices.register(value.username, value.email, value.password).subscribe((result) => {
      alert('user registered');
    });
  }
}
