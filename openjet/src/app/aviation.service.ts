import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AviationService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();

    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if( error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

  getFlights() {
    return this.http.get('https://mocksvc.mulesoft.com/mocks/d6ab7980-98af-4440-8a98-bf1de508de59/api/flights')
      .map( this.extractData )
      .catch( this.handleError );
  }

  getAirport( id ) {
    return this.http.get('https://mocksvc.mulesoft.com/mocks/d6ab7980-98af-4440-8a98-bf1de508de59/api/airports/' + id)
      .map( this.extractData )
      .catch( this.handleError );
  }

  getAircrew( id ) {
    return this.http.get('https://mocksvc.mulesoft.com/mocks/d6ab7980-98af-4440-8a98-bf1de508de59/api/aircrews/' + id)
      .map( this.extractData )
      .catch( this.handleError );
  }

  getState( id ) {
    return this.http.get('https://mocksvc.mulesoft.com/mocks/d6ab7980-98af-4440-8a98-bf1de508de59/api/states/' + id)
      .map( this.extractData )
      .catch( this.handleError );
  }

}
