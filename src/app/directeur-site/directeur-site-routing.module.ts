import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
 import { CamionComponent } from './components/camion/camion.component';
import { ChauffeurComponent } from './components/chauffeur/chauffeur.component';
import { FournisseursComponent } from './components/fournisseurs/fournisseurs.component';
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
   path:'lsf',
   component:LogbookgrComponent,
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
    path:'fournisseur',
    component:FournisseursComponent,
  },
  {
    path:'article',
    component:ArticleComponent,
  }

  
 ]},
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurSiteRoutingModule { }
