import { NgModule } from "@angular/core";
import { AccessFormsRoutingModule } from './access-forms.routing';
import { CommonModule } from '@angular/common';
import { AccessFormsComponent } from "./access-forms.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AccessFormsComponent,

  ],
  imports: [
    AccessFormsRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AccessFormsComponent,
    AccessFormsRoutingModule
  ]

})

export class AccessFormsModule { }