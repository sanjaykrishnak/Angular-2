import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/animal-list.component';
import { AnimalSubmitComponent } from './animal/animal-submit.component';
import { AnimalService } from './service/animal.service';
import { EventsComponent } from './events/events.component';
import { EventdetailsComponent } from './events/eventdetails.component';
import { EventsHomeComponent } from './events/events-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalSubmitComponent,
    EventsComponent,
    EventdetailsComponent,
    EventsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
