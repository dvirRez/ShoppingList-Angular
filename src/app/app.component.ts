import { Component, OnInit, ViewChild } from '@angular/core';
import { ListDataService } from './list-data.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ItemDetailsComponent) child;
  private listItems: any = null;
  private selectedItem: any = null;
  private nextId: number = null;

  constructor(private listDataService: ListDataService) {

  }

  ngOnInit() {
    console.log(this.listDataService.getJSON());
    this.listItems = this.listDataService.getJSON();
    this.nextId = this.listItems.length;
  }

  findItemById = (itemId) => {
    return this.listItems.find((item) => item.id === itemId)
  };

  addItem(e) {
    const newItem = {
      id: this.nextId,
      name: e.target.value || 'Blank',
      quantity: 0,
      price: 0,
      description: '',
    };

    this.listItems = [...this.listItems, newItem];
    this.nextId ++;
  }

  removeItem(itemId) {
    this.listItems =  this.listItems.filter( item => item.id !== itemId);
    //Hide details panel if item is removed
    if(this.selectedItem && this.selectedItem.id === itemId) {
      this.selectedItem = null;
    }
  }

  ToggleDetailsPanel(item) {
    this.selectedItem =(this.selectedItem && this.selectedItem.id === item.id) ? null : this.findItemById(item.id);
  }
}
