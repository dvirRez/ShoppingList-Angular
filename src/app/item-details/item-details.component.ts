import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  template: `
    <div class="details-container light_border">
      <div class="sub_header">
        <span [innerText]="detailsHeader"></span>
      </div>
      <form class="form-style">
        <p>
          <label>Quantity</label>
          <input type="text" [(ngModel)]="item.quantity" name="quantity" />
        </p>
        <p>
          <label>Price</label>
          <input type="text" [(ngModel)]="item.price" name="price" />
        </p>
        <p>
          <label>description</label>
          <textarea rows="2" [(ngModel)]="item.description" name="description"></textarea>
        </p>
      </form>
    </div>
  `,
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  private detailsHeader: string = '';
  @Input() item;
  constructor() { }

  ngOnInit() {
    this.detailsHeader = `${this.item.name.toUpperCase() || ''} DETAILS`;
  }

}
