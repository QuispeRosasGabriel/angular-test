import { NgModule } from '@angular/core';
import { PrivatePageRoutingModule } from './private-page.routing';
import { CommonModule } from '@angular/common';
import { PrivatePageComponent } from './private-page.component';

@NgModule({
  declarations: [PrivatePageComponent],
  imports: [PrivatePageRoutingModule, CommonModule],
  exports: [PrivatePageComponent, PrivatePageRoutingModule],
})
export class PrivatePageModule {}
