import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;
  
  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private movieService: MovieService
  ) { }



  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
    
  }

  save(): void {
    this.movieService.saveMovie(this.movie).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
