import { Component, OnInit } from '@angular/core';
import { AnimalService} from '../service/animal.service';
import { Animal} from '../model/animal';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: []
})
export class AnimalListComponent implements OnInit {

    private animalService: AnimalService;
    animal: Animal;
  constructor(private router: Router, as: AnimalService) {
      console.log('AnimalListComponent;constructor()');
      this.animalService = as;
      this.getAnimals();
    }

  ngOnInit() { }

  getAnimals() {
      console.log('AnimalListComponent:getAnimals()');
      return  this.animalService.getAnimals().subscribe(data => {
        this.animal = data;
      });
    }

}
