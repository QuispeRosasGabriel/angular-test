import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessFormsComponent } from './access-forms.component';

const route: Routes = [
  {
    path: "", component: AccessFormsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class AccessFormsRoutingModule { }
