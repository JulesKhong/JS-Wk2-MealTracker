import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="col-sm-6 edit-meal">
    <h2>{{ meal.name }}</h2>
    <hr>
    <p class="entry">{{ meal.details }}</p>
    <p>~ {{ meal.calories }} calories ~</p>
  </div>
  `
})

export class EditMealComponent {
  public meal: Meal;

}
