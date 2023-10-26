import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivatePageComponent } from './private-page.component';

const route: Routes = [
  {
    path: '',
    component: PrivatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PrivatePageRoutingModule {}
