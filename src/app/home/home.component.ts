import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showText = false;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.showText = true;
    // }, 3000);
  }
  loaded() {
    this.showText = true;
  }
}
