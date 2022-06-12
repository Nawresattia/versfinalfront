import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/article/article.component';
 import { CamionComponent } from './components/camion/camion.component';
import { ChauffeurComponent } from './components/chauffeur/chauffeur.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
 import { GardienComponent } from './components/gardien/gardien.component';
 import { LogbookSMaintenanceComponent } from './components/logbook-s-maintenance/logbook-s-maintenance.component';
import { LogbookSuiviRCourriersComponent } from './components/logbook-suivi-r-courriers/logbook-suivi-r-courriers.component';
import { LogbookgrComponent } from './components/logbookgr/logbookgr.component';
import { LogbooksuiviParcRComponent } from './components/logbooksuivi-parc-r/logbooksuivi-parc-r.component';

import { DirecteurSiteComponent } from './directeur-site.component';

const routes: Routes = [{ path: '', component: DirecteurSiteComponent ,

children:[
  {
    path: '',
    component: GardienComponent,
  },
 
  
   {
    path:'logparc',
    component:LogbooksuiviParcRComponent,
  },
  {
path:'logcour',
component:LogbookSuiviRCourriersComponent,
  },
  {
    path:'lsf',
    component:LogbookgrComponent,
  },
  {
    path:'fournisseur',
    component:FournisseurComponent,
  },
 
  {
    path:'logman',
    component:LogbookSMaintenanceComponent,
  },
  {
    path:'camion',
    component:CamionComponent,
  },
  {
    path:'chauffeur',
    component:ChauffeurComponent,
  },
 
  {
    path:'article',
    component:ArticlesComponent,
  }

  
 ]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurSiteRoutingModule { }
