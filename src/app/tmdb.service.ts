import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TmdbMovie } from './tmdbmovie';
import { TmdbSearchMovie } from './tmdbsearchmovie';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private internetMovieDatabaseApiKey = "142297aa7863260822688b87f1b21a72";
  private apiUrl = 'https://api.themoviedb.org/3';
  private imageUrl = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';


  constructor(private http: HttpClient) { }

  searchMovies(query: string) : Observable<TmdbSearchMovie> {
    console.log("Search movies");
    return this.http.get<TmdbSearchMovie>(this.apiUrl + '/search/movie' + `?api_key=${this.internetMovieDatabaseApiKey}&query=${query}`)
  }

  getMovie(id: number) : Observable<TmdbMovie> {
    console.log(id);
    return this.http.get<TmdbMovie>(`https://api.themoviedb.org/3/movie/${id}` + `?api_key=${this.internetMovieDatabaseApiKey}`);
  }
}
