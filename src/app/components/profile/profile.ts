import { Component } from '@angular/core';
import { Auth } from '../../Services/auth';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public authService: Auth) {}
}
