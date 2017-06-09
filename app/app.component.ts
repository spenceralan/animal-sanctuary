import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  template: `
  <h1>Sanctuary City</h1>
  <hr>
  <div class="row">
    <div class="col-sm-6">
      <animal-detail [animals]="animals"></animal-detail>
    </div>

    <div class="col-sm-6">
      <new-animal-form (saveAnimal)="save($event)"></new-animal-form>
    </div>
  </div>
  `,
})

export class AppComponent implements OnInit {

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

}