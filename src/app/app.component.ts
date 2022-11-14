import { Component, OnInit } from '@angular/core';
import { environment as ENV } from '@env/environment';

@Component({
  selector: 'skv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'S&K Vinyl';
  navOpen = false;

  constructor() {}

  ngOnInit() {
    console.log(`${ENV.envname.toUpperCase()}: ${ENV.mascot}`);
  }
}
