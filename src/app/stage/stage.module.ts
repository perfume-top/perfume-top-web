import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage.component';
import { StageRoutingModule } from './stage-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [StageComponent, TopbarComponent, FooterComponent],
  imports: [
    CommonModule,
    StageRoutingModule
  ]
})
export class StageModule { }
