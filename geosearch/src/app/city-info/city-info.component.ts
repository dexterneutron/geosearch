import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {
  @Input() cityInfo?:any;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
