import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ListDataService } from './list-data.service';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ShoppingListComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [
    ListDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
