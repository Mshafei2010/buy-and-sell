import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing []=[];
  constructor(private listingService: ListingsService) { }

  ngOnInit(): void {
    this.listingService.getListingsForUser().subscribe(listings => this.listings = listings);
  }
  onDeleteClicked(listingId: string): void {
    alert('Your Item will be deleted')
    this.listingService.deleteListing(listingId).subscribe(() => {this.listings = this.listings.filter(listing => listing.id !== listingId)})
  }
}
