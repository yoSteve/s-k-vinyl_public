import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'skv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(email: string, password: string) {
    this.auth.login(email, password);
    this.router.navigate(['list']);
  }

  onCancel() {
    this.router.navigate(['list']);
  }

}
