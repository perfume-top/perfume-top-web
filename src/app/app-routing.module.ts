import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageModule } from './stage/stage.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', loadChildren: () => import('./stage/stage.module').then(mod => mod.StageModule)},
  // { path: 'sample', component: SampleDemoComponent },

  // { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
