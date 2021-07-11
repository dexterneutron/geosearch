import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit {
  @Input() cityInfo?:any;
  
  constructor(public sanitizer: DomSanitizer) { 
  }

  getTrustedUrl(){
  return this.sanitizer.bypassSecurityTrustResourceUrl(this.cityInfo.iframeUrl);
  }
  
  ngOnInit(): void {
    
  }
}
