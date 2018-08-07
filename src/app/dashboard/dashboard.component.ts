import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { TmdbMovie } from '../tmdbmovie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: TmdbMovie[];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() : void {
    this.tmdb.discover().subscribe(tmdb => {
      this.movies = [];
      this.movies.push(tmdb.results[0]);
      this.movies.push(tmdb.results[1]);
      this.movies.push(tmdb.results[2]);
      this.movies.push(tmdb.results[3]);
      this.movies.push(tmdb.results[4]);
    }  );
  }

}
