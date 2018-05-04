import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { NgRedux } from '@angular-redux/store';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  vehicles: object[];

  constructor(
    private dashboardService: DashboardService,
    private ngRedux: NgRedux<any>,
  ) { }

  ngOnInit() {
    this.ngRedux.subscribe(() => {});
  }
  async getVehicles() {
    try {
      this.vehicles = await this.dashboardService.getVehicles();
      console.log(this.vehicles);

      // this.getChargeState('58249821341709357')
      // this.vehicles.forEach((vehicle:any, i) => {
      //   this.getChargeState(vehicle.id);
      // });

      // const vehiclePromises = this.vehicles.map((vehicle:any) => this.getChargeState(vehicle.id)
      //   .then((res:any) => Object.assign({}, { battery_range: res.battery_range }))
      //   .catch(err => err));
      // const result = await Promise.all(vehiclePromises);
      // console.log(result);
      // const vehicleId = this.vehicles[0].id;
      // const url2 = `https://owner-api.teslamotors.com/api/1/vehicles/${vehicleId}/data_request/charge_state`;
      // fetch(url2, {
      //   method: 'GET',
      //   headers: new Headers({ 'Authorization': `Bearer ${oAuth}` }),
      //   credentials: 'include'
      // })
      //   .then(response => console.log(response));
      // build request urls
      //const ids = this.vehicles.map(vehicle => vehicle.id);
      //console.log(ids);

      // const promiseSerial = funcs =>
      //   funcs.reduce((promise, func) =>
      //     promise.then(result => func().then(Array.prototype.concat.bind(result))),
      //     Promise.resolve([]))

      // // some url's to resolve

      // // convert each url to a function that returns a promise
      // const funcs = ids.map(id => () => this.dashboardService.getChargeState(id))

      // // execute Promises in serial
      // promiseSerial(funcs)
      //   .then(console.log.bind(console))
      //   .catch(console.error.bind(console))

    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }
}
