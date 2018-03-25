import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="items_container">
        <input
            type="checkbox"
            (change)="onCheckboxChange()"
        />
      <label [textContent]="item.name" *ngIf="!isEdit" (click)="isEdit=true" from="name"></label>
      <input class="no-style-input" *ngIf="isEdit" (blur)="isEdit=false" (keydown.enter)="isEdit=false"
             type="text"
             id="name" [(ngModel)]="item.name" />
      <span class="clickable_elements">
          <span (click)="onEditClick.emit(item);">Edit item</span>
          <span  class="remove_item" (click)="onRemove.emit(item.id);">X</span>
        </span>

    </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onEditClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange() {

  }

}
