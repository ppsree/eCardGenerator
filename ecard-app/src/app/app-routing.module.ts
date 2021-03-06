import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { CardsComponent } from 'src/app/cards/cards.component';
import { CardDetailComponent } from 'src/app/card-detail/card-detail.component';
import { CardPreviewComponent } from 'src/app/card-preview/card-preview.component';


const routes: Routes = [
  {path: "" ,component: HomeComponent },
  {path: "about", component: AboutComponent},
  {path: "cards", component: CardsComponent},
  {path: "card/:id", component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
