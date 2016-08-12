import { Component, EventEmitter } from 'angular2/core'
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="col-sm-4 meal-form form-group">
    <h2>Add a new entry</h2>
    <label for="name">Food name</label>
    <input class="form-control" id="name" #name />
    <label for="details">Details (quantity, source, condiments)</label>
    <input class="form-control" id="details" #details>
    <label for="calories">Calories (Not sure? Try <a href="http://www.calorieking.com/foods/">this resource</a>)</label>
    <input class="form-control" id="calories" #calories>
    <button class="btn btn-default" (click)="createMeal(name, details, calories)">Log meal</button>
  </div>
  `
})

export class NewMealComponent {
  public newMeal: Meal;
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  createMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement){
    this.newMeal = new Meal(name.value, details.value, parseInt(calories.value));
    this.onSubmitNewMeal.emit(this.newMeal);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
