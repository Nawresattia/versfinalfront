
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogbookfazizaComponent } from './components/logbookfaziza/logbookfaziza.component';
 import { LgParcroulantComponent } from './components/lg-parcroulant/lg-parcroulant.component';
 import { LgRCourriersComponent } from './components/lg-rcourriers/lg-rcourriers.component';
import { LgbMaintenanceComponent } from './components/lgb-maintenance/lgb-maintenance.component';
import { CreateUserDialog, DirecteurSiteAdminComponent, } from './components/directeur-site/directeur-site.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserDialog, DirecteurGeneralAdminComponent } from './components/directeur-general/directeur-general.component';
import { DirecteurGeneralsComponent } from './components/directeur-generals/directeur-generals.component';
import { AjoutDirecteurGeneralsComponent } from './components/ajout-directeur-generals/ajout-directeur-generals.component';
import { ModifierDirecteurSiteComponent } from './components/modifier-directeur-site/modifier-directeur-site.component';
import { ModifierDirecteurGeneralsComponent } from './components/modifier-directeur-generals/modifier-directeur-generals.component';


@NgModule({
  declarations: [AdminComponent,
DirecteurGeneralAdminComponent,
      DirecteurSiteAdminComponent,
      EditUserDialog,
     DashboardComponent,
     LogbookfazizaComponent,
      LgParcroulantComponent,
       LgRCourriersComponent,
        LgbMaintenanceComponent,
        CreateUserDialog,
        DirecteurGeneralsComponent,
        AjoutDirecteurGeneralsComponent,
        ModifierDirecteurSiteComponent,
        ModifierDirecteurGeneralsComponent],
     exports: [
      EditUserDialog,
      CreateUserDialog,
    ],

  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
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
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  entryComponents: [MatDialogModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class AdminModule { }
