import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie/movie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCollectionComponent } from './movie-collection/movie-collection.component';


const routes: Routes = [
  { path: 'movies', component: MovieComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'collection', component: MovieCollectionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
