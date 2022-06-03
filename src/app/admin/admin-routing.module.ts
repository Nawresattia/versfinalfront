import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
 
import { DirecteurGeneralAdminComponent } from './components/directeur-general/directeur-general.component';
import { DirecteurSiteAdminComponent } from './components/directeur-site/directeur-site.component';
import { LgParcroulantComponent } from './components/lg-parcroulant/lg-parcroulant.component';
import { LgRCourriersComponent } from './components/lg-rcourriers/lg-rcourriers.component';
 import { LgbMaintenanceComponent } from './components/lgb-maintenance/lgb-maintenance.component';
import { LogbookfazizaComponent } from './components/logbookfaziza/logbookfaziza.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children: [
  {
    path: '',
    component: DashboardComponent,
  },
   
  {
    path: 'dirg',
    component: DirecteurGeneralAdminComponent,
  },
  {
  path: 'ds',
  component: DirecteurSiteAdminComponent,
  },
  {
    path:'lgf',
    component:LogbookfazizaComponent,
  },
  {
    path:'lparcroulant',
    component:LgParcroulantComponent,
  },
   
   {
     path:'rc',
     component:LgRCourriersComponent,
   },
   {
     path:'Ma',
     component:LgbMaintenanceComponent,
   }
]}, 

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
