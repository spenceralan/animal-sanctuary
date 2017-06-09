import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AnimalDetailComponent } from './animal_detail.component'


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    AnimalDetailComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
