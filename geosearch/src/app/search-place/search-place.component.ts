import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { Placetag } from '../placetag';
import { GeosearchService } from '../geosearch.service';
import { city } from '../city';
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

  selectedCity?:string;
  city?:city={};

  loadCityDetails(){
    if(this.selectedCity){
    this.geosearchService.getCity(this.selectedCity).subscribe(cityInfo=>this.city=this.parseCity(cityInfo));
    console.log(this.city);
    }
  }

  parseCity(rawdata:any) :city {
    //Getting the wikipedia url
    let wikiUrl = rawdata.elements[0].tags.wikipedia;
    let splitUrl = wikiUrl.split(":");
    wikiUrl = "https://"+splitUrl[0]+".wikipedia.org/wiki/"+splitUrl[1];
    
    //Building the Iframe url
    let lat:number=rawdata.elements[0].lat;
    let lon:number=rawdata.elements[0].lon;
    let iframeUrl:string="https://www.openstreetmap.org/export/embed.html?bbox="+lon+"%2C"+lat+"%2C"+(lon+0.01).toFixed(9)+"%2C"+(lat+0.02).toFixed(9)+"&amp;layer=mapnik";
    //Developer's note:Ok, I know that for future features it'd be convenient to actually render the map,however
    //the Iframe approach is simple and works. 

    let city:city={
    id:rawdata.elements[0].id,
    name:rawdata.elements[0].tags.name,
    population:rawdata.elements[0].tags.population,
    wikipedia:rawdata.elements[0].tags.wikipedia,
    wikipediaUrl:wikiUrl,
    iframeUrl:iframeUrl,
    lat:lat,
    lon:lon,
    };
    return city;
  }

  constructor(public geosearchService: GeosearchService) { }

  ngOnInit(): void {
  }

}
