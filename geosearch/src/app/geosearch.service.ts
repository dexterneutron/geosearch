import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { city } from './city';

@Injectable({
  providedIn: 'root'
})
export class GeosearchService {
  private targetUrl ="https://lz4.overpass-api.de/api/interpreter?data=[out:json];%20nwr[name=%22Paris%22][%22admin_level%22=%222%22];%20out%20center;";
  
  getCity() : Observable<any> {
    this.http.get<any[]>(this.targetUrl);
    let c:city={name:"Paris",id:"17807753",population:2187526,wikipedia:"fr:Paris"};
    const cityInfo=of(c);
    return cityInfo;
  }

  constructor(private http: HttpClient) { }
}
