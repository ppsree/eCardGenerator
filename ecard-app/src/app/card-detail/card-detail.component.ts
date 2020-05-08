import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Cards } from '../../model/cards';
import { Card } from '../../model/card';
import { GreetingCard } from '../../model/greetingcard';
// import { NgForm, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public editBtnClicked: boolean = false;  
  public to = new FormControl('');
  public from = new FormControl('');
  public message = new FormControl('');
  public greeting = new FormControl('');

  // public cardForm: any = {
  //   "to": "",
  //   from: "",
  //   message: "",
  //   greeting: ""
  // };

  public id: string;
  private sub: any;
  public cards: any;
  public card: Card = new Card();

  constructor(private route: ActivatedRoute, private cardsService: CardsService, public dialog: MatDialog) { 
  }

  ngDoCheck() {
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.cardsService.getCards().subscribe(
          res => {
            this.cards = (res);
            for (let card of this.cards) {
              if (card['id'] == this.id) {
                this.card = card;
                this.setCardProperties();
                break;
              }
            }
          }
        );
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public editMessage() {
    this.editBtnClicked = true;
    this.greeting.setValue("");
    this.message.setValue("");
  }

  public reset() {
    this.editBtnClicked = false;
    this.setCardProperties();
  }

  public setCardProperties(){   
    this.greeting.setValue(this.card.greeting);
    this.message.setValue(this.card.message);
  }

  showMessage(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {title: "Alert!", message: "This functionality is under development right now."}
    });
  }
}
