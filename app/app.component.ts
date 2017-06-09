import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  template: `
  <h1>Sanctuary City</h1>
  <animal-detail></animal-detail>
  `,
})

export class AppComponent {

}