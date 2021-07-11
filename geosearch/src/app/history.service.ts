import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  createRecord(city: String) {
    let record={
      dateTime:new Date(),
      cityName:city,
    }
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("searchhistory")
            .add(record)
            .then(res => {}, err => reject(err));
    });
}
  constructor(private firestore: AngularFirestore) { }
}
