import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appSignWithGoogle]',
})
export class SignWithGoogleDirective {
  @HostListener('click', ['$event'])
  async clickHandle(e: MouseEvent) {
    e.preventDefault();
    await this.authService.loginWithGoogle();

    this.router.navigate(['/dashboard']);
  }

  constructor(private authService: AuthService, private router: Router) {}
}
