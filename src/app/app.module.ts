import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RecentvehicleComponent } from './recentvehicle/recentvehicle.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    RecentvehicleComponent,
    NewarrivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
