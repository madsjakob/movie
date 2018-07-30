import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = MOVIES;

  constructor() { }

  ngOnInit() {
  }

}
