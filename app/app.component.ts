import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  template: `
  <h1>Sanctuary City</h1>
  <hr>
  <div class="row">
    <div class="col-sm-6">
      <animal-detail></animal-detail>
    </div>

    <div class="col-sm-6">
      <h2>stuff for forms</h2>
    </div>
  </div>
  `,
})

export class AppComponent {

}