import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { DirecteurSiteRoutingModule } from './directeur-site-routing.module';
import { DirecteurSiteComponent } from './directeur-site.component';

import {   GardienComponent } from './components/gardien/gardien.component';
import { CamionComponent } from './components/camion/camion.component';
import { LogbooksuiviParcRComponent } from './components/logbooksuivi-parc-r/logbooksuivi-parc-r.component';
import { LogbookSuiviRCourriersComponent } from './components/logbook-suivi-r-courriers/logbook-suivi-r-courriers.component';
import { LogbookSMaintenanceComponent } from './components/logbook-s-maintenance/logbook-s-maintenance.component';


import { ArticlesComponent } from './components/article/article.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ChauffeurComponent } from './components/chauffeur/chauffeur.component';
import {   FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { LogbookgrComponent } from './components/logbookgr/logbookgr.component';
import { AjouterCamionComponent } from './components/ajouter-camion/ajouter-camion.component';
import { ModifierCamionComponent } from './components/modifier-camion/modifier-camion.component';
import { AjouterArticleComponent } from './components/ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './components/modifier-article/modifier-article.component';
import { ModifierFournisseurComponent } from './components/modifier-fournisseur/modifier-fournisseur.component';
import { AjouterFournisseurComponent } from './components/ajouter-fournisseur/ajouter-fournisseur.component';
import { AjouterChauffeurComponent } from './components/ajouter-chauffeur/ajouter-chauffeur.component';
import { ModifierChauffeurComponent } from './components/modifier-chauffeur/modifier-chauffeur.component';
import { AjouterGardienComponent } from './components/ajouter-gardien/ajouter-gardien.component';
import { ModifierGardienComponent } from './components/modifier-gardien/modifier-gardien.component';



@NgModule({
  declarations: [DirecteurSiteComponent,

    GardienComponent,


     LogbooksuiviParcRComponent,
    LogbookSuiviRCourriersComponent,
    LogbookSMaintenanceComponent,
    CamionComponent,
    ChauffeurComponent,
    ArticlesComponent,


    FournisseurComponent,
    LogbookgrComponent,
    AjouterCamionComponent,
    ModifierCamionComponent,
    AjouterArticleComponent,
    ModifierArticleComponent,
    ModifierFournisseurComponent,
    AjouterFournisseurComponent,
    AjouterChauffeurComponent,
    ModifierChauffeurComponent,
    AjouterGardienComponent,
    ModifierGardienComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    DirecteurSiteRoutingModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,

    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,


  ],
  entryComponents: [MatDialogModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DirecteurSiteModule { }
