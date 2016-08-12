import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calories',
  pure: false,
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args){
  var output: Meal[] = [];
  var calorieView = args[0];
  if(calorieView == "high"){
    for(var i=0; i< input.length; i++) {
      if(input[i].calories > 500){
        output.push(input[i]);
      }
    }
    return output;
    } else if(calorieView == "low") {
        for(var i=0; i< input.length; i++){
          if(input[i].calories <= 500){
            output.push(input[i]);
          }
        }
    return output;
    }
    else {
    return input;
    }
  }
}
