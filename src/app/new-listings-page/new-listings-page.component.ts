import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent implements OnInit {
  
  constructor(
    private router:Router,
    private listingsService : ListingsService
  ) { }

  ngOnInit(): void {
  }
  onSubmit({ name , description,price}):void{
    this.listingsService.CreateListing(name,description,price).subscribe(()=>
    {
      alert('Creating a new List...');
      this.router.navigateByUrl('/my-listing')
    })
  }

}
