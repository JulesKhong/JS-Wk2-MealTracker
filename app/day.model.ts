import { Meal } from './meal.model';

export class DayEntry {
  constructor(public day: number[], public dayMeals: Meal[]){

  }
}
