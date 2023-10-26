import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "src/app/components/footer/footer.component";
import { HeaderComponent } from "src/app/components/header/header.component";
import { NavbarComponent } from "src/app/components/navbar/navbar.component";

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
  ],
  exports: [
    HomeComponent,
    HomeRoutingModule
  ]

})

export class HomeModule { }