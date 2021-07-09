import { Component, OnInit } from '@angular/core';

import { GeosearchService } from '../geosearch.service';
import { city } from '../city';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {
  cityInfo:city={};
  constructor(private geosearchService: GeosearchService) { 
  }

  getCityInfo() :void {
    this.cityInfo=this.geosearchService.getCity();
  }

  ngOnInit(): void {
    this.getCityInfo();
  }
}
