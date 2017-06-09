import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AnimalDetailComponent } from './animal_detail.component';
import { NewAnimalFormComponent } from './new_animal_form.component';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    AnimalDetailComponent,
    NewAnimalFormComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
