import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
 // Write the function to call the cards json - and display in console.
  constructor(private http: HttpClient) { }

  public getCards() {
    return this.http.get("../assets/cards.json");
  }
}
