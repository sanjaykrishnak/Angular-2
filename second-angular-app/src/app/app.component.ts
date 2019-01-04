import {Component, NgModule, VERSION} from '@angular/core'; 
import {BrowserModule} from '@angular/platform-browser'; 
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { A } from './a.component'; 
import { B } from './b.component';

import { DataService } from './data.service';

@Component({ 
  selector: 'my-app', 
  template: ` 
  <div> 
    <h2>Hello {{name}}</h2> 
    <router-outlet></router-outlet> 
  </div> 
  `, 
}) 
export class App { 
  name:string; 
  constructor() { 
    this.name = `Angular! v${VERSION.full}` 
  } 
}