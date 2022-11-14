import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SharedModule } from '@app/shared/shared.module';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ListModule { }
