import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbody',
  styleUrls: ['./dashbody.component.scss'],
  template: `
    <div class="dash-body">
      <div class="container-fluid dash-body-content">
        <div class="title-container py-2">
          <span class="h2 text-primary font-weight-bold text-capitalize">Title</span>
        </div>

        <div class="py-3 mx-1">
          <router-outlet ></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class DashbodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
