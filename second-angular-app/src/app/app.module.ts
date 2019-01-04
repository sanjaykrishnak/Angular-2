import { RouterModule } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from './app.component';


import { A } from './a.component'; 
import { B } from './b.component';

import { DataService } from './data.service';


@NgModule({ 
  imports: [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([ 
      { path: '', redirectTo: 'a', pathMatch: 'full'}, 
      { path: 'a', component: A }, 
      { path: 'b', component: B } 
    ]) 
  ], 
  declarations: [ 
    App, 
    A, 
    B 
  ], 
  providers: [ DataService ], 
  bootstrap: [ App ] 
}) 
export class AppModule {}