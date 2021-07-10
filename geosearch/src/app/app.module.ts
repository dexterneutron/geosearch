import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { CityInfoComponent } from './city-info/city-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPlaceComponent,
    CityInfoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'geosearch'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
