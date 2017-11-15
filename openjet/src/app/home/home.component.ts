import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MaterializeAction } from 'angular2-materialize';

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
  
  constructor(private titleService: Title, private aviationService: AviationService) { }
  
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
      this.aviationService.getAirport( list[0].airportFrom )
        .subscribe(
          response => {
            list[0].airportFrom = response.name;
            this.aviationService.getAirport( list[0].airportTo )
              .subscribe(
                response => { 
                  list[0].airportTo = response.name;
                  homeCpt.flights.push( list[0] );
                  list.splice(0, 1);
                  homeCpt.formatFlightsData( list );
                },
                error => { list[0].airportTo = 'Not Available'; }
              );
          },
          error => { list[0].airportFrom = 'Not Available'; }
        );
    }
  }

  getAirCrews( list ) {
    var airCrewList = list;
    
    this.aircrews = [];
    console.log( airCrewList );
    this.loadCrewFromApi( airCrewList );
  }
  
  loadCrewFromApi( airCrewListToCheck ) {
    var homeCpt = this;

    if( airCrewListToCheck.length > 0 ) {
      this.aviationService.getAircrew( airCrewListToCheck[0] )
        .subscribe(
          response => {
            homeCpt.aircrews.push( response.name );
            airCrewListToCheck.splice(0, 1);
            homeCpt.loadCrewFromApi( airCrewListToCheck );
          },
          error => {
            homeCpt.aircrews.push( 'Not Available' );
            airCrewListToCheck.splice(0, 1);
            homeCpt.loadCrewFromApi( airCrewListToCheck );
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
