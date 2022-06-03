import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DirecteurGeneralComponent } from './directeur-general.component';

const routes: Routes = [{ path: '', component: DirecteurGeneralComponent ,
children: [
  {
    path: '',
    component: DashboardComponent,
  }
]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurGeneralRoutingModule { }
