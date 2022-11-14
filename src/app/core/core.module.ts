import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SideMenuComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [SideMenuComponent]
})
export class CoreModule { }
