import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-cards',
  templateUrl: './sample-cards.component.html',
  styleUrls: ['./sample-cards.component.css']
})
export class SampleCardsComponent implements OnInit {
  public src: string;
  public greetings: string[];
  
  constructor() { }

  ngOnInit() {
    this.src = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-magnificent-diwali-png-image_3634886.jpg";
    this.greetings = [
      {
        "title": "Seasons Greetings",
        "summary": "Wish your loved ones this festive season with fire crackers and an awesome ecard. Browse through our seasonal greeting cards collection to know more.",
        "image": "https://png.pngtree.com/png-clipart/20190516/original/pngtree-magnificent-diwali-png-image_3634886.jpg"
      },
      {
        "title": "Birthday Wishes",
        "summary": "Never miss another birthday. Surprise your loved ones with these awesome Birthday and Anniversary cards. Browse through our seasonal greeting cards collection to know more.",
        "image": "https://www.desktopbackground.org/p/2012/04/13/373948_happy-birthday-cake-wallpapers_1024x768_h.jpg"
      }
    ];
  }

}
