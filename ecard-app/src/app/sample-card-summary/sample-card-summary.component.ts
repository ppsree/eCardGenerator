import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sample-card-summary',
  templateUrl: './sample-card-summary.component.html',
  styleUrls: ['./sample-card-summary.component.css']
})
export class SampleCardSummaryComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public viewCards(){
    this.router.navigate(["cards"])
    // TBD
  }
}
