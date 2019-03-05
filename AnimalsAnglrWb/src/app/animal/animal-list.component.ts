import { Component, OnInit } from '@angular/core';
import { AnimalService} from '../service/animal.service';
import { Animal} from '../model/animal';



@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: []
})
export class AnimalListComponent implements OnInit {

    private animalService: AnimalService;
    animals:any = [];
  constructor(as: AnimalService) {
      console.log('AnimalListComponent;constructor()');
      this.animalService = as;
      this.getAnimals();
    }

  ngOnInit() { }

  getAnimals() {
      console.log('AnimalListComponent:getAnimals()');
      return  this.animalService.getAnimals().subscribe(data => {
        this.animals = data;
      });
    }

}
