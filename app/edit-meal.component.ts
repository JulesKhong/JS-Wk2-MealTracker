import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <div class="col-sm-4 edit-meal form-group">
    <h2 (click)='detailClicked("name")'>{{ meal.name }}</h2>
    <hr>
    <p (click)='detailClicked("details")' class="entry">{{ meal.details }}</p>
    <p (click)='detailClicked("calories")'>~ {{ meal.calories }} calories ~</p>
    <input class="form-control edit-detail" [(ngModel)]="meal.name" *ngIf="selectedDetail === 'name'"/>
    <input class="form-control edit-detail" [(ngModel)]="meal.details" *ngIf="selectedDetail === 'details'"/>
    <input class="form-control edit-detail" [(ngModel)]="meal.calories" *ngIf="selectedDetail === 'calories'"/>
    <h5 *ngIf="selectedDetail !== 'done'" (click)='doneEditing()'>Done editing</h5>
    <p class="aside">Click on a detail to update your entry</p>
  </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
  public selectedDetail: string = "done";
  detailClicked(clickedDetail: string) {
    this.selectedDetail = clickedDetail;
  }
  doneEditing(){
    this.selectedDetail = "done";
  }
}
