import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animal/animal-list.component';
import { AnimalSubmitComponent } from './animal/animal-submit.component';
import { EventsHomeComponent } from './events/events-home.component';

const routes: Routes = [
  { path: 'animals',      component: AnimalListComponent },
  { path: 'createAnimal', component: AnimalSubmitComponent },
  { path: 'siblings', component: EventsHomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
