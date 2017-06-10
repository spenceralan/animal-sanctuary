import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'new-animal-form',
  template: `
    <a *ngIf="!displayForm" class="btn btn-primary" (click)="toggleForm()">Add Animal</a>
    <a *ngIf="displayForm" class="btn btn-primary" (click)="toggleForm()">Hide Form</a>
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
      <a class="btn btn-primary" (click)="toggleForm(); save(species.value, name.value, age.value, sex.value, location.value, diet.value, handlers.value, likes.value, dislikes.value)">Submit</a>
    </form>
  `,
})

export class NewAnimalFormComponent implements OnInit {
  displayForm: boolean = false;
  @Output() saveAnimal = new EventEmitter();

  ngOnInit() {

  }

  save(species, name, age, sex, location, diet, handlers, likes, dislikes) {
    let newAnimal = new Animal(
      species,
      name,
      Number(sex),
      diet,
      location,
      Number(handlers),
      sex,
      likes,
      dislikes,
    )
    this.saveAnimal.emit(newAnimal);
  }

  toggleForm() {
    if (this.displayForm === true) {
      this.displayForm = false;
    } else {
      this.displayForm = true;
    }
  }
}