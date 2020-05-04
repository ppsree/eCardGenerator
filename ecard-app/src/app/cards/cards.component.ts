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
  public tags: Array<string> = [];
  constructor(private router: Router,
    private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.getCards().subscribe(
      res => {
        this.cards = res;
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
    console.log(event);
    for (let card in this.cards) {
      if (card["tags"] != event) {
        
      }
    }
  }

}
