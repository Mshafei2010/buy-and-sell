import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-editing-listings-page',
  templateUrl: './editing-listings-page.component.html',
  styleUrls: ['./editing-listings-page.component.css']
})
export class EditingListingsPageComponent implements OnInit {

  listing: Listing;
  constructor(private route:ActivatedRoute ,private router:Router,private listingsService: ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id).subscribe(listing => {this.listing = listing })
      
  }

  onSubmit({ name , description,price}):void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.editListing(id,name,description,price).subscribe(() => {
      alert('Saving changes to Listing...');
    this.router.navigateByUrl('/my-listing');
    }
    )
  }
}
