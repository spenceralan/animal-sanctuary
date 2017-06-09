import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'new-animal-form',
  template: `
    <a *ngIf="!displayForm" class="btn btn-primary" (click)="toggleForm()">Add Animal</a>
    <form *ngIf="displayForm">
      <div class="form-group">
        <label>Species</label>
        <input class="form-control" name="species" [(ngModel)]="species">
        <label>Name</label>
        <input class="form-control" name="name" [(ngModel)]="name">
        <label>Age</label>
        <input class="form-control" type="number" name="age" [(ngModel)]="age">
        <label>Sex</label>
        <input class="form-control" name="sex" [(ngModel)]="sex">
        <label>Location</label>
        <input class="form-control" name="location" [(ngModel)]="location">
        <label>Diet</label>
        <input class="form-control" name="diet" [(ngModel)]="diet">
        <label>Number of Handlers</label>
        <input class="form-control" type="number" name="handlers" [(ngModel)]="handlers">
        <label>Likes</label>
        <input class="form-control" name="likes" [(ngModel)]="likes">
        <label>Dislikes</label>
        <input class="form-control" name="dislikes" [(ngModel)]="dislikes">
      </div>
      <a class="btn btn-primary" (click)="toggleForm(); update(species.value, name.value, age.value, sex.value, location.value, diet.value, handlers.value, likes.value, dislikes.value)">Add Animal</a>
    </form>
  `,
})

export class NewAnimalFormComponent implements OnInit {
  displayForm: boolean = false;
  @Output() saveAnimal = new EventEmitter();

  ngOnInit() {

  }
}