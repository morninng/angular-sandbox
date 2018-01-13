import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
