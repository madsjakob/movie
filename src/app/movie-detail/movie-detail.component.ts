import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { TmdbService } from '../tmdb.service';
import { TmdbMovie } from '../tmdbmovie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;
  tmdbMovie: TmdbMovie;
  tmdbMovieList: TmdbMovie[];
  
  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private movieService: MovieService,
    private tmdbService: TmdbService
  ) { }



  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovie(id)
      .subscribe(movie => 
        { this.movie = movie;
         if(!this.movie.tmdbid) {
          this.tmdbService.searchMovies(encodeURI(this.movie.title))
            .subscribe(search => {
              if(search.results.length > 0) {
                this.movie.tmdbid = search.results[0].id;
                console.log(this.movie.tmdbid);
              }
            });
        } else {
          this.tmdbService.getMovie(this.movie.tmdbid)
            .subscribe(tmdb => this.tmdbMovie = tmdb);
        }
        
      });


    
    //this.tmdbService.getMovie()
    //  .subscribe(tmdbMovie => this.tmdbMovie = tmdbMovie);
    
  }

  save(): void {
    this.movie.title = this.movie.title + '!';
    this.movieService.saveMovie(this.movie).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
