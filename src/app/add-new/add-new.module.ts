import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './add-new.component';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionComponent } from './option/option.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [AddNewComponent, OptionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    SharedModule,
  ]
})
export class AddNewModule { }
