import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  getToken(val) {
    const url = 'https://owner-api.teslamotors.com/oauth/token';
    const grant_type = "password";
    const client_id = "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384";
    const client_secret = "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3";

    const body = `email=${val.email}&password=${val.password}&grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

    // setting content-type to application/x-www-form-urlencoded is required for browser to not send
    // preflight options request (which tesla server rejects)
    // so this is the best way to send properly endcodeed form data with angular
    return this.http.post(url, body, { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') })
      .toPromise()
      .then(res => Promise.resolve(res))
      .catch(err => Promise.reject(err));
  }

}
