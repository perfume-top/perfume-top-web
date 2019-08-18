import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
  animations: [ slideInAnimation ]
})
export class StageComponent implements OnInit, OnDestroy {

  darkmode = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'stage-loading');
    setTimeout(() => {
      this.renderer.addClass(document.body, 'stage-top');
    }, 4000);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'stage-top');
    this.renderer.addClass(document.body, 'stage-loading');
  }

}
