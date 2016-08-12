import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { DisplayMealComponent } from './display-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'list-meal',
  inputs: ['listMeal'],
  outputs: ['onMealSelect'],
  directives: [DisplayMealComponent, EditMealComponent, NewMealComponent],
  pipes: [CaloriesPipe],
  template: `
  <div class="col-sm-2">
    <h4>Today's calories:</h4>
    <p>{{ totalCalories(listMeal) }}</p>
    <hr>
    <h4>Filter entries</h4>
    <select id="calorieFilter" class="form-control" (change)="onChange($event.target.value)">
      <option selected="selected">All entries</option>
      <option value="low">Low calorie (100 or less)</option>
      <option value="high">High calorie (over 500)</option>
    </select>
    <hr>
    <h4>Today's entries</h4>
    <display-meal *ngFor="#meal of listMeal | calories:chosenCalorieCount"
      (click)="mealClicked(meal)"
      [meal]="meal"
      [class.selected]="meal === selectedMeal">
    </display-meal>
  </div >
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal>
  <new-meal (onSubmitNewMeal)='addMeal($event)'>
  </new-meal>
  `
})

export class ListMealComponent {
  public listMeal: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public calorieCount: number = 0;
  public chosenCalorieCount: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(this.selectedMeal);
  }
  addMeal(newMeal: Meal): void {
    this.listMeal.push(newMeal);
  }
  totalCalories(allMeals: Meal[]) {
    this.calorieCount = 0;
    for(var meal of allMeals){
      this.calorieCount += meal.calories;
    }
    return this.calorieCount;
  }
  onChange(calorieValueFromMenu: string){
    this.chosenCalorieCount = calorieValueFromMenu;
  }
}
