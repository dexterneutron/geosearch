import { Injectable } from '@angular/core';
import { city } from './city';

@Injectable({
  providedIn: 'root'
})
export class GeosearchService {

  getCity() : city {
    
    let cityInfo:city={name:"Paris",id:"17807753",population:2187526,wikipedia:"fr:Paris"};
    return cityInfo;

  }

  constructor() { }
}
