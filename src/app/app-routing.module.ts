import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'dirs', loadChildren: () => import('./directeur-site/directeur-site.module').then(m => m.DirecteurSiteModule) },
{ path: 'dirg', loadChildren: () => import('./directeur-general/directeur-general.module').then(m => m.DirecteurGeneralModule) },
{ path: 'gard', loadChildren: () => import('./gardien/gardien.module').then(m => m.GardienModule) },
{ path: 'dash', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{ path: 'dash', loadChildren: () => import('./directeur-general/directeur-general.module').then(m => m.DirecteurGeneralModule) },
{ path: 'Gardien', loadChildren: () => import('./gardien/gardien.module').then(m => m.GardienModule) },


{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
