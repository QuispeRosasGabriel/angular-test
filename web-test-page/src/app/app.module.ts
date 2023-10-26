import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessFormsModule } from './pages/access-forms/access-forms.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, AccessFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
