import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardPreviewComponent } from './card-preview/card-preview.component';
import { CardsComponent } from './cards/cards.component';
import { TagComponent } from './tag/tag.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';

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
    CardSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
