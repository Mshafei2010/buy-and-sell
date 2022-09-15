import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent implements OnInit {
  listing: Listing | undefined;
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private listingsServices : ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsServices.getListingById(id)
      .subscribe(listing => {this.listing = listing; this.isLoading=false });
    this.listingsServices.addViewToListing(id).subscribe(() => console.log('Views Updated!'))
  }

}
