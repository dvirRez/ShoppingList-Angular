import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListDataService {


  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data)
    // });
  }

  public getListData(): any {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([
        {
          id: 0,
          name: 'Bread',
          quantity: 3,
          price: 5,
          description: 'Bread is bread',
        },
        {
          id: 1,
          name: 'Milk',
          quantity: 3,
          price: 5,
          description: 'Milk is Milk',
        },
        {
          id: 2,
          name: 'Fish',
          quantity: 3,
          price: 5,
          description: 'Fish is Fish',
        },
      ]), 2000);
    });
  }

}
