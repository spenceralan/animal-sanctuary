import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'agePipe',
  pure: false
})
export class AgePipe implements PipeTransform {

  transform(animals: Animal[], ageFilter) {
    if (ageFilter === "youngAnimals") {
      return animals.filter(function(animal) {
        return Number(animal.age) < 3;
      });
    } else if (ageFilter === "oldAnimals") {
      return animals.filter(function(animal) {
        return Number(animal.age) > 10;
      });
    } else {
      return animals;
    }
  }

}
