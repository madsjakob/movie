import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieApiUrl = 'https://localhost:5001/api/movie';

  constructor(private http: HttpClient) { 
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieApiUrl)
      .pipe(
        tap(movies => console.log('Fetched movies')),
        catchError(this.handleError('getMovies', []))
      );
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
