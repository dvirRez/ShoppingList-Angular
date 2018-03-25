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

  public getJSON(): any {
    const data = [
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
      }
    ];
    //return this.http.get("../src/data/data.json");
    return data;
  }

}
