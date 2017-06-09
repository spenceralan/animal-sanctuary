import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'new-animal-form',
  template: `
    <a *ngIf="!displayForm" class="btn btn-primary" (click)="toggleForm()">Add Animal</a>
    <form *ngIf="displayForm">
      <div class="form-group">
        <label>Species</label>
        <input class="form-control" #species>
        <label>Name</label>
        <input class="form-control" #name>
        <label>Age</label>
        <input class="form-control" type="number" #age>
        <label>Sex</label>
        <input class="form-control" #sex>
        <label>Location</label>
        <input class="form-control" #location>
        <label>Diet</label>
        <input class="form-control" #diet>
        <label>Number of Handlers</label>
        <input class="form-control" type="number" #handlers>
        <label>Likes</label>
        <input class="form-control" #likes>
        <label>Dislikes</label>
        <input class="form-control" #dislikes>
      </div>
      <a class="btn btn-primary" (click)="toggleForm()">Add Animal</a>
    </form>
  `,
})

export class NewAnimalFormComponent implements OnInit {
  displayForm: boolean = false;
  
  ngOnInit() {

  }

  save(species, name, age, sex, location, diet, handlers, likes, dislikes) {
    let newAnimal = new Animal(
      species.value,
      name.value,
      Number(sex.value),
      diet.value,
      location.value,
      Number(handlers.value),
      sex.value,
      likes.value,
      dislikes.value,
    )
  }

  toggleForm() {
    if (this.displayForm === true) {
      this.displayForm = false;
    } else {
      this.displayForm = true;
    }
  }
}