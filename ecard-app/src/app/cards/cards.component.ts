import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public cards: any;
  public fullCards: any;
  public tags: Array<string> = [];
  constructor(private router: Router,
    private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe(
      res => {
        this.cards = res;
        this.fullCards = res;
        for (let card of this.cards) {
          if (this.tags.indexOf(card.tags) == -1) {
            this.tags.push(card.tags);
          }
        }
      }
    );
    
  }

  navigateTo(id: string){
    this.router.navigate(['/card',id]);
  }

  filterCards(event) {
    /*  
    * Here event represents the JSON data of all 
    * tags and their respective values
    */

    let cards = [];
    this.cards = this.fullCards;

    for (let card of this.cards) {
      if (event[card.tags] == 'true') {
        cards.push(card);
      }
    }
    if (cards.length == 0) {
      this.cards = this.fullCards;
    } else {
      this.cards = cards;
    }
  }

}
