import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <div class="items-container">
        <input
            type="checkbox"
            (change)="onCheckboxChange($event)"
        />
      <label [ngClass]="setClasses()" [textContent]="item.name" *ngIf="!isEdit" (click)="isEdit=true" from="name"></label>
      <input class="no-style-input" *ngIf="isEdit" (blur)="isEdit=false" (keydown.enter)="isEdit=false"
             type="text"
             id="name" [(ngModel)]="item.name" />
      <span class="clickable-elements">
          <fa name="edit" class="pointer" (click)="onEditClick.emit(item);"></fa>
          <span  class="remove-item pointer" (click)="onRemove.emit(item.id);">X</span>
        </span>

    </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  isChecked: boolean = false;

  @Input() item;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  @Output() onEditClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setClasses = () => ({
    'basic-item': !this.isChecked,
    'deleted-item': this.isChecked,
  });

  onCheckboxChange(e) {
    this.isChecked = e.target.checked;
  }

}
