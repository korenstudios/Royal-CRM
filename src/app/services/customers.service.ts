import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  CollectionReference,
  doc,
  Firestore,
  collectionData,
} from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersRef: CollectionReference<Customer>;
  private customer$: Observable<Customer[]>;

  constructor(private afs: Firestore) {
    this.customersRef = collection(
      this.afs,
      'customers'
    ) as CollectionReference<Customer>;

    this.customer$ = collectionData(this.customersRef, {
      idField: 'id',
    }).pipe(shareReplay(1));
  }

  add(customer: Omit<Customer, 'id'>) {
    return addDoc(this.customersRef, customer);
  }

  remove(id: string) {
    const docRef = doc(this.customersRef, id);
    return deleteDoc(docRef);
  }

  getAll() {
    return this.customer$;
  }

  getById(id: string) {
    const docRef = doc(this.customersRef, id);
    return docData(docRef, { idField: 'id' });
  }

  update({ id, ...customer }: Partial<Customer>) {
    if (!id) {
      return;
    }

    const docRef = doc(this.customersRef, id);
    updateDoc(docRef, customer);
  }
}
