import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'animal-detail',
  template: `
  <div class="animal-detail" *ngFor="let animal of animals">
    <h2>{{animal.name}}</h2>
  </div>
  `,
})

export class AnimalDetailComponent implements OnInit {
  animals: Animal[];
  ngOnInit() {
    this.animals = [
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
      )
    ];
  }
}