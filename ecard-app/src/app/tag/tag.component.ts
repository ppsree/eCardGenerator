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
  public clr: string = "primary";
  public tagJson = {};

  constructor() { 
    
  }

  ngOnInit() {
    window.localStorage.removeItem('tags');
  }

  ngAfterViewChecked() {
    if (window.localStorage.getItem('tags') && window.localStorage.getItem('tags').toString() != '') {
      // this.tagJson = JSON.parse(window.localStorage.getItem('tags'));
    } else {
      for (let tag of this.tags) {
        this.tagJson[tag] = 'false';
        window.localStorage.setItem('tags',JSON.stringify(this.tagJson));
      } 
    }
    
  }

  filterCards(tag: string) {
    
    if (this.tagJson[tag] == 'false') {
      this.tagJson[tag] = 'true';
      this.clr = "accent";
    } else {
      this.tagJson[tag] = 'false';
      this.clr = "primary";
    }
    window.localStorage.setItem('tags',JSON.stringify(this.tagJson));
    this.filterSelected.emit(this.tagJson);
  }

}
