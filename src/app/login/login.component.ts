import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgRedux } from '@angular-redux/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private ngRedux: NgRedux<any>,
  ) { }

  ngOnInit() {}

  async onSubmit(val) {
    try {
      const res: any = await this.loginService.getToken(val);
      console.log(res);
      this.ngRedux.dispatch({type: 'ADD_LOGIN_CREDENTIAL', payload: val.email});
      localStorage.setItem('access_token', res.access_token);
      this.router.navigate(['/dashboard']);
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }
}
