import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input() tags: Array<string>;
  @Output() filterSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterCards(tag: string) {
    this.filterSelected.emit(tag);
  }

}
