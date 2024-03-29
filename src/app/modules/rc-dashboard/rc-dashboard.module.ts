import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PanelMenuModule} from "primeng/panelmenu";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";

import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashbodyComponent } from './components/dashbody/dashbody.component';
import { FooterComponent } from './components/footer/footer.component';
import { RcHomeComponent } from './components/rc-home/rc-home.component';
import { RcSubjectsComponent } from './components/rc-subjects/rc-subjects.component';
import { RcStudentsComponent } from './components/rc-students/rc-students.component';
import { RcClassesComponent } from './components/rc-classes/rc-classes.component';
import { RcClasslistsComponent } from './components/rc-classlists/rc-classlists.component';
import { RcSettingsComponent } from './components/rc-settings/rc-settings.component';



@NgModule({
  declarations: [
    TopMenuComponent,
    SideMenuComponent,
    DashboardComponent,
    DashbodyComponent,
    FooterComponent,
    RcHomeComponent,
    RcSubjectsComponent,
    RcStudentsComponent,
    RcClassesComponent,
    RcClasslistsComponent,
    RcSettingsComponent
  ],
    imports: [
        CommonModule,
        MenubarModule,
        SharedModule,
        ButtonModule,
        InputTextModule,
        PanelMenuModule,
        RippleModule,
        CardModule,
        DividerModule
    ],
  exports: [
    DashboardComponent
  ]
})
export class RcDashboardModule { }
