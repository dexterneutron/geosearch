import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeosearchService {

  getCity(value:any) : Observable<any> {
    let targetUrl="https://lz4.overpass-api.de/api/interpreter?data=[out:json];%20nwr[name=%22"+value+"%22][%22admin_level%22=%222%22];%20out%20center;";
    console.log(targetUrl);
    return this.http.get<any[]>(targetUrl);
  }

  constructor(private http: HttpClient) { }
}
