import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardPreviewComponent } from './card-preview/card-preview.component';
import { CardsComponent } from './cards/cards.component';
import { TagComponent } from './tag/tag.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { SampleCardsComponent } from './sample-cards/sample-cards.component';
import { SampleCardSummaryComponent } from './sample-card-summary/sample-card-summary.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressTrackerComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    CardDetailComponent,
    CardPreviewComponent,
    CardsComponent,
    TagComponent,
    CardSummaryComponent,
    SampleCardsComponent,
    SampleCardSummaryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
