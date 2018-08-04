import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieApiUrl = 'https://localhost:5001/api/movie';
  private movieUrl = 'http://localhost/movieapi/movies.json';
  private singleMovieUrl = 'http://localhost/movieapi/movie1.json';

  constructor(private http: HttpClient) { 
  }

  getMovies(): Observable<Movie[]> {
    console.log("Fetching movies");
    return this.http.get<Movie[]>(this.movieApiUrl);
  }

  getMovie(nr: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieApiUrl + `/${nr}`);
  }

  saveMovie(movie: Movie): Observable<any> {
    if(movie.nr <= 0) {
      return this.http.post(this.movieApiUrl, movie);
    } else {
      return this.http.put(this.movieApiUrl + `/${movie.nr}`, movie);
    }
  }

  
}
