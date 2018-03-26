import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-shopping-list',
  template: `
    <div class="list-container">
      <div class="sub-header">
        <span>ADD YOUR ITEMS HERE</span>
      </div>
      <app-list-item
         *ngFor="let listItem of listItems"
         [item]="listItem"
         (onChange)="onComplete.emit($event)"
         (onRemove)="onDelete.emit($event)"
         (onEditClick)="OnOpenDetailsPanel.emit($event)"
      >
      </app-list-item>
      <div class="add-item_div">
        <input class="add-item-input" placeholder="Add Item" name="label" (keyup.enter)="onAddedInputEnterKey.emit($event)">
      </div>
    </div>    
  `,
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input() listItems;
  @Output() onComplete = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() OnOpenDetailsPanel = new EventEmitter();
  @Output() onAddedInputEnterKey = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
