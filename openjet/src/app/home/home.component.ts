import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MaterializeAction } from 'angular2-materialize';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { AviationService } from '../aviation.service';

import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flights: any = [];
  aircrews: any = [];
  flightState: any;
  
  constructor(
    private titleService: Title, 
    private aviationService: AviationService) { }
  
  ngOnInit() {
    this.titleService.setTitle('Welcome to OpenJet');
    this.getFlights();
  }

  getFlights() {
    var homeCpt = this;

    this.aviationService.getFlights()
      .subscribe(
        response => {
          homeCpt.formatFlightsData( response );
        },
        error => { console.log(error); }
      )
  }

  formatFlightsData( list ) {
    var homeCpt = this;

    if( list.length > 0 ) {
      list[0].startedAtUtc = moment(list[0].startedAtUtc).format('MMMM Do YYYY, h:mm:ss a');
      list[0].endedAtUtc = moment(list[0].endedAtUtc).format('MMMM Do YYYY, h:mm:ss a');

      Observable.forkJoin(
        this.aviationService.getAirport( list[0].airportFrom ), 
        this.aviationService.getAirport( list[0].airportTo )
      ).subscribe(
        responses => {
          list[0].airportFrom = responses[0].name;
          list[0].airportTo = responses[1].name;
          homeCpt.flights.push( list[0] );
          list.splice(0, 1);
          homeCpt.formatFlightsData( list );
        },
        error => { 
          list[0].airportFrom = 'Not Available';
          list[0].airportTo = 'Not Available';
          homeCpt.flights.push( list[0] );
          list.splice(0, 1);
          homeCpt.formatFlightsData( list );
        }
      );
    }
  }

  getAirCrews( list ) {
    var airCrewList = list;
    
    this.aircrews = [];
    this.loadCrewFromApi( airCrewList, 0 );
  }
  
  loadCrewFromApi( airCrewListToCheck, index ) {
    var homeCpt = this;

    if( (airCrewListToCheck.length > 0) && (airCrewListToCheck.length > index) ) {
      this.aviationService.getAircrew( airCrewListToCheck[index] )
        .subscribe(
          response => {
            homeCpt.aircrews.push( response.name );
            index++;
            homeCpt.loadCrewFromApi( airCrewListToCheck, index );
          },
          error => {
            homeCpt.aircrews.push( 'Not Available' );
            index++;
            homeCpt.loadCrewFromApi( airCrewListToCheck, index );
          }
        );
    }
  }

  getState( id ) {
    var homeCpt = this;

    this.aviationService.getState( id )
      .subscribe(
        response => {
          homeCpt.flightState = response.name;
        },
        error => { console.log(error); }
      );
  }

}
