import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl = 'http://localhost/movieapi/movies.json';
  private singleMovieUrl = 'http://localhost/movieapi/movie1.json';

  constructor(private http: HttpClient) { 
  }

  getMovies(): Observable<Movie[]> {
    console.log("Fetching movies");
    return this.http.get<Movie[]>(this.movieUrl);
    //return of(MOVIES);
  }

  getMovie(nr: number): Observable<Movie> {
    return this.http.get<Movie>(this.singleMovieUrl)
    //return of(MOVIES[3]);
  }

  
}
