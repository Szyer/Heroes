import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisilist/crisis-list/crisis-list.component';

import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { CommonModule } from '@angular/common';
const appRoutes: Routes = [


  {path: ' ', redirectTo: '/crisis-center', pathMatch: 'full'},
  {path: '**', component: PagNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],


  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
