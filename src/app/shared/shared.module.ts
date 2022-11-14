import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import {
  faBars,
  faCoffee,
  faCompactDisc,
  faListAlt,
  faPlusCircle,
  faSignInAlt,
  faSignOutAlt,
  faTh
} from '@fortawesome/free-solid-svg-icons';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [LoadingSpinnerComponent, PlaceholderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    LoadingSpinnerComponent,
    PlaceholderComponent
  ]
})
export class SharedModule {
  constructor() {
    library.add(
      faBars,
      faCoffee,
      faCompactDisc,
      faListAlt,
      faPlusCircle,
      faSignInAlt,
      faSignOutAlt,
      faTh
    );
  }
}
