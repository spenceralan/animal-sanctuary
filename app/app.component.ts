import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  template: `
  <h1>Sanctuary City</h1>
  <hr>
  <div class="row">
    <div class="col-sm-6">
    <select class="form-control" (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="oldAnimals">Old Animals</option>
    </select>
      <animal-detail [animals]="animals" [ageFilter]="ageFilter"></animal-detail>
    </div>

    <div class="col-sm-6">
      <new-animal-form (saveAnimal)="save($event)"></new-animal-form>
    </div>
  </div>
  `,
})

export class AppComponent implements OnInit {
  ageFilter: string = "allAnimals";
  animals: Animal[] = [
    new Animal(
      "Arctic Fox",
      "Moon",
      2,
      "Carnivore",
      "Northern Trail",
      5,
      "Female",
      "Cool shade",
      "Loud noises",
    ),
    new Animal(
      "Ocelot",
      "Prince",
      4,
      "Carnivore",
      "Tropical Rain Forest Building",
      6,
      "Male",
      "Laying in the sunshine",
      "Toys that are not rope-based",
    ),
    new Animal(
      "Northwest Black Tailed Deer",
      "Tinkerbell",
      8,
      "Herbivore",
      "Northern Trail",
      2,
      "Female",
      "Delicate roots and leaves",
      "Loud Noises",
    ),
  ];

  ngOnInit() {

  }

  save(animal) {
    this.animals.push(animal);
  }

  onChange(optionFromMenu) {
    this.ageFilter = optionFromMenu;
  }

}