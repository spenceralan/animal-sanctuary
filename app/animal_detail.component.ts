import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'animal-detail',
  template: `
  <div class="animal-detail" *ngFor="let animal of animals">
    <a><h2 (click)="animal.toggleDisplay()">{{animal.name}}, {{animal.species}}</h2></a>
    <div *ngIf="animal.display">
      <p>Location: {{animal.location}}</p>
      <p>Age: {{animal.age}}</p>
      <p>Sex: {{animal.sex}}</p>
      <p>Diet: {{animal.diet}}</p>
      <p>Number of Handlers: {{animal.numberOfCaretakers}}</p>
      <p>Likes: {{animal.likes}}</p>
      <p>Dislikes: {{animal.dislikes}}</p>
      <edit-animal-form [animal]="animal"></edit-animal-form>
    </div>
  </div>
  `,
})

export class AnimalDetailComponent implements OnInit {
  
  @Input() animals;

  ngOnInit() {

  }

}