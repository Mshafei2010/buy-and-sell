import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { observeInsideAngular } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const httpOptionsWithAuth = token=> ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'AuthToken':token
  })
});

@Injectable({
  providedIn: 'root'
})

export class ListingsService {

  constructor(
    private http:HttpClient,
    private auth: AngularFireAuth
  ) { }

  getListings(): Observable <Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  getListingById(id:string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(`/api/listings/${id}/add-view`,
    {},
    httpOptions
    )
  }

  getListingsForUser(): Observable<any> {
    const auth = getAuth();
    var userid = auth.currentUser.uid;
    if( userid !==null){
      return this.http.get<Listing[]>(`/api/users/${userid}/listings`)
    }
  }

  deleteListing(id: string): Observable<any> {
    return new Observable<any>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          this.http.delete(`/api/listings/${id}`, httpOptionsWithAuth(token))
            .subscribe(() => observer.next());
        })
      })
    })
  }
  
  CreateListing(name: string, description: string, price: number): Observable<Listing> {
    const auth = getAuth();
    var userid = auth.currentUser.uid;
    return this.http.post<Listing>(
      `/api/new-listings/${userid}`,
      {name, description, price },
      httpOptions,
    );
  }
  editListing(id: string, name: string, description: string, price: number): Observable<Listing> {
    return new Observable<Listing>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token => {
          return this.http.post<Listing>(
            `/api/listings/${id}`,
            { name, description, price },
            httpOptionsWithAuth(token),
          ).subscribe(() => observer.next());
        })
      })
    })
  }
}
