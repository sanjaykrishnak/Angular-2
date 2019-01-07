import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/animal-list.component';
import { AnimalSubmitComponent } from './animal/animal-submit.component';

const routes: Routes = [
  { path: 'animals',      component: AnimalListComponent },
  { path: 'createAnimal', component: AnimalSubmitComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
