import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {
    path:"sports", component:SportsComponent
  },
  {
    component:DashboardComponent, path:""
  },
  {
    component:BusinessComponent, path:"business"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
