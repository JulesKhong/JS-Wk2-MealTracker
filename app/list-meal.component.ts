import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { DisplayMealComponent } from './display-meal.component';

@Component({
  selector: 'list-meal',
  inputs: ['listMeal'],
  directives: [DisplayMealComponent],
  template: `
  <div class="col-sm-2">
    <display-meal *ngFor="#meal of listMeal"
      [meal]="meal">
    </display-meal>
  </div >
  `
})

export class ListMealComponent {
  public listMeal: Meal[];
}
