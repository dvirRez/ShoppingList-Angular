import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-details',
  template: `
    <div class="details_container">
      <div class="sub_header">
        <span [innerText]="detailsHeader"></span>
      </div>
      <form class="form_style">
        <p>
          <label>Quantity</label>
          <input type="text" [value]="item.quantity" name="quantity" />
        </p>
        <p>
          <label>Price</label>
          <input type="text" [value]="item.price" name="price" />
        </p>
        <p>
          <label>description</label>
          <textarea rows="2" [value]="item.description" name="description"></textarea>
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
    this.detailsHeader = `${this.item.name} DETAILS`;
  }

}
