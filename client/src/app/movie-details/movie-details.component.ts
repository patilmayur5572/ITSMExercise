import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  apiURL: string;
  constructor(private http: HttpClient) { 
    //Fetch domain URL from Development envoirnment
    this.apiURL = `${environment.domainURL}` + '/movie';
  }
  movie: any;
  productionCompanies: any;
  //Promise to fetch data first and load the template later
  filtersLoaded: Promise<boolean>;
  
  ngOnInit() {
    //Onload fetch the data   
    this.getMovieData();    
  }
//Fetches Movie data from the api  
  getMovieData() {
    this.http.get(this.apiURL).subscribe(movie => {
      this.movie = movie;
      this.filtersLoaded = Promise.resolve(true);
   });
  }
}
