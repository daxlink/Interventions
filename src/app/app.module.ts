import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { ProblemeComponent } from './probleme/probleme.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProblemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
