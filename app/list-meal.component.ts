import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { DisplayMealComponent } from './display-meal.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'list-meal',
  inputs: ['listMeal'],
  outputs: ['onMealSelect'],
  directives: [DisplayMealComponent, EditMealComponent],
  template: `
  <div class="col-sm-2">
    <h4>Today's entries</h4>
    <display-meal *ngFor="#meal of listMeal"
      (click)="mealClicked(meal)"
      [meal]="meal"
      [class.selected]="meal === selectedMeal">
    </display-meal>
  </div >
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal>
  `
})

export class ListMealComponent {
  public listMeal: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(this.selectedMeal);
  }
}
