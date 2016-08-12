import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'display-meal',
  inputs: ['meal'],
  template: `
  <p>{{ meal.name }}</p>
  `
})

export class DisplayMealComponent {
  public meal: Meal;
}
