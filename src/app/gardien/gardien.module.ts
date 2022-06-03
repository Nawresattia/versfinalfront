import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GardienRoutingModule } from './gardien-routing.module';
import { GardienComponent } from './gardien.component';
import { LogbfournisseurazComponent } from './components/logbfournisseuraz/logbfournisseuraz.component';
import { LogbsparcrComponent } from './components/logbsparcr/logbsparcr.component';
import { LogbscourComponent } from './components/logbscour/logbscour.component';
import { LogbsretourembComponent } from './components/logbsretouremb/logbsretouremb.component';
import { LogbmainteComponent } from './components/logbmainte/logbmainte.component';
 

@NgModule({
  declarations: [GardienComponent, LogbfournisseurazComponent, LogbsparcrComponent, LogbscourComponent, LogbsretourembComponent, LogbmainteComponent],
  imports: [
    CommonModule,
    GardienRoutingModule
  ]
})
export class GardienModule { }
