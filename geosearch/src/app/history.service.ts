import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  createRecord() {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("searchhistory")
            .add({"test":"test"})
            .then(res => {}, err => reject(err));
    });
}

  constructor(private firestore: AngularFirestore) { }
}
