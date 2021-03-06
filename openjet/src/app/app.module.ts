import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AviationService } from "./aviation.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    HttpModule,
    MaterializeModule
  ],
  providers: [
    AviationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
