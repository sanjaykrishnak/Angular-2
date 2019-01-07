import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/animal-list.component';
import { AnimalSubmitComponent } from './animal/animal-submit.component';
import { AnimalService } from './service/animal.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
