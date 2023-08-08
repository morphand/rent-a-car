import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [CommonModule, AppRoutingModule, MatButtonModule],
  exports: [AboutComponent, NavbarComponent, FooterComponent],
})
export class CoreModule {}
