import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  today = new Date();

  form = {
    email: '',
    password: '',
  };

  error = '';

  async onSubmit({ valid }: NgForm) {
    if (!valid) {
      return;
    }

    this.error = '';

    try {
      await this.authService.loginEmail(this.form.email, this.form.password);
      this.router.navigate(['/dashboard']);
    } catch (err) {
      this.error = (err as Error).message;
    }
  }

  showAndHide(toggle: HTMLElement, password: HTMLInputElement) {
    if (password.type === 'password') {
      toggle.classList.replace('bi-eye-slash', 'bi-eye');
      password.setAttribute('type', 'text');
      return;
    }

    toggle.classList.replace('bi-eye', 'bi-eye-slash');
    password.setAttribute('type', 'password');
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
