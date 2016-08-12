import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { ListMealComponent } from './list-meal.component';

@Component({
  selector: 'root-app',
  directives: [ListMealComponent],
  template: `
  <div class="container">
    <list-meal [listMeal]="meals">
    </list-meal>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Oatmeal", "with peanut butter and applesauce", 280),
      new Meal("burrito", "no cheese or sour cream. From food cart", 600),
      new Meal("salad bar", "with chicken, and fruit salad", 400)
    ];
  }
}
