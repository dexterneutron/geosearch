import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { Placetag } from '../placetag';

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

  constructor() { }

  ngOnInit(): void {
  }

}
