import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { Placetag } from '../placetag';
import { GeosearchService } from '../geosearch.service';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css']
})

export class SearchPlaceComponent implements OnInit {
  cities:Placetag[] = [
  {name:"Paris",searchTag:"paris"},
  {name:"Madrid",searchTag:"madrid"},
  ];

  selectedCity?:Placetag;
  city?:any;

  loadCityDetails(){
    this.geosearchService.getCity().subscribe(cityInfo=>this.city=cityInfo);
    console.log("Son are u winning?")
  }
  constructor(public geosearchService: GeosearchService) { }

  ngOnInit(): void {
  }

}
