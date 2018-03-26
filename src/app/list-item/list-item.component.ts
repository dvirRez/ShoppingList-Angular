import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  // Notice when clicking on item name an input is replacing the label for editing
  template: `
    <div class="items-container">
        <input type="checkbox"
               (change)="onCheckboxChange($event)"
        />
      <span [ngClass]="setClasses()" *ngIf="!isEdit" >
        <label [textContent]="item.name" 
               class="basic-item"
               (click)="isEdit=true" 
               from="name"
        ></label>        
      </span>
      <input class="no-style-input" 
             autofocus
             *ngIf="isEdit" 
             (blur)="isEdit=false" 
             (keydown.enter)="isEdit=false"
             type="text"
             [(ngModel)]="item.name" 
      />
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

  // Helper function to handle marking of deleted item depending on its checkbox
  setClasses = () => ({
    'basic-item': !this.isChecked,
    'deleted-item': this.isChecked,
  });

  onCheckboxChange(e) {
    this.isChecked = e.target.checked;
  }

}
