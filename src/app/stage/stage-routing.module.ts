import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageComponent } from './stage.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    component: StageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
        data: {animation: 'HomePage'}
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(mod => mod.InfoModule),
        data: {animation: 'InfoPage'}
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageRoutingModule { }
