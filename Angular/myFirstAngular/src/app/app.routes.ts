import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error-404-not-found/error-404-not-found.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'minions?name=:name', component: CardDetailsComponent},
    {path: 'minions', component: CardsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
];
