import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal';

@Pipe({
  name: 'oldAnimals',
  pure: false
})
export class FullnessPipe implements PipeTransform {

  transform(animals: Animal[]) {
    return animals.filter(function(animal){
      return Number(animal.age) > 10;
    });
  }

}
