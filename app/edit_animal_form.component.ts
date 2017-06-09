import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'edit-animal-form',
  template: `
    <a *ngIf="!displayForm" class="btn btn-primary" (click)="toggleForm()">Edit</a>
    <form *ngIf="displayForm">
      <div class="form-group">
        <label>Species</label>
        <input class="form-control" name="species" [(ngModel)]="animal.species">
        <label>Name</label>
        <input class="form-control" name="name" [(ngModel)]="animal.name">
        <label>Age</label>
        <input class="form-control" type="number" name="age" [(ngModel)]="animal.age">
        <label>Sex</label>
        <input class="form-control" name="sex" [(ngModel)]="animal.sex">
        <label>Location</label>
        <input class="form-control" name="location" [(ngModel)]="animal.location">
        <label>Diet</label>
        <input class="form-control" name="diet" [(ngModel)]="animal.diet">
        <label>Number of Handlers</label>
        <input class="form-control" type="number" name="handlers" [(ngModel)]="animal.numberOfCaretakers">
        <label>Likes</label>
        <input class="form-control" name="likes" [(ngModel)]="animal.likes">
        <label>Dislikes</label>
        <input class="form-control" name="dislikes" [(ngModel)]="animal.dislikes">
      </div>
      <a class="btn btn-primary" (click)="toggleForm()">Submit</a>
    </form>
  `,
})

export class EditAnimalFormComponent implements OnInit {
  displayForm: boolean = false;
  @Input() animal;

  ngOnInit() {
  }

  toggleForm() {
    if (this.displayForm === true) {
      this.displayForm = false;
    } else {
      this.displayForm = true;
    }
  }
}