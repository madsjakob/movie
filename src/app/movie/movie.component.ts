import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];
  selectedMovie: Movie;
  myNewMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  newMovie(): void {
    this.myNewMovie = { nr: 0, title: "Last Vegas" };
    this.movieService.saveMovie(this.myNewMovie).subscribe(() => this.getMovies());
  }
}
