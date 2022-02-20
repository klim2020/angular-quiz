import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
//





// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    PanelModule,
    CardModule,
    CalendarModule,
    FormsModule,
    TableModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
