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

@Component({
  selector: 'app-register',
  imports: [MatInputModule, MatFormField, MatLabel, FormsModule, ReactiveFormsModule, NgClass],
templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  registerForm!: FormGroup;
  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  register() {
    console.log(this.registerForm.value);
  }
}
