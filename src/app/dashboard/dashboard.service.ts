import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }

  getVehicles() {
    // const url = 'https://owner-api.teslamotors.com/api/1/vehicles';
    const url = 'https://7vqxu7fhfb.execute-api.us-east-1.amazonaws.com/prod/get-vehicles';
    const oAuth = localStorage.getItem('access_token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${oAuth}`, 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.get(url, { headers: headers })
      .toPromise()
      .then((res:any) => Promise.resolve(res.body.response))
      .catch(err => Promise.reject(err));
  }

  getChargeState(vehicleId) {
    const url = `https://owner-api.teslamotors.com/api/1/vehicles/${vehicleId}/data_request/charge_state`;
    const oAuth = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${oAuth}`);
    //const params = new HttpParams();
    //params.set('vehicle_id', vehicleId);
    return this.http.get(`https://cors-anywhere.herokuapp.com/${url}`, { headers: headers })
      .toPromise()
      .then((res: any) => Promise.resolve(res.response))
      .catch(err => Promise.reject(err));
  }
}
