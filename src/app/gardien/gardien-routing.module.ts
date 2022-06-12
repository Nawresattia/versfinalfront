import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogbfournisseurazComponent } from './components/logbfournisseuraz/logbfournisseuraz.component';
import { LogbmainteComponent } from './components/logbmainte/logbmainte.component';
import { LogbscourComponent } from './components/logbscour/logbscour.component';
import { LogbsparcrComponent } from './components/logbsparcr/logbsparcr.component';

import { GardienComponent } from './gardien.component';

const routes: Routes = [{ path: '', component: GardienComponent,
children:[
  {
path:'',
component:LogbfournisseurazComponent,

  },
  {
    path:'logparc',
    component:LogbsparcrComponent,
  },

  {
    path:'logcour',
    component:LogbscourComponent,
  },

  
  {
    path:'logman',
    component:LogbmainteComponent,
  }
  
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GardienRoutingModule { }
