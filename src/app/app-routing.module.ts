import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
  },
  {
    path: 'comunicaciones',
    loadChildren: () => import('./comunicaciones/comunicaciones.module').then( m => m.ComunicacionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
