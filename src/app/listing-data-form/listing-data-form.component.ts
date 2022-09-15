import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText;
  @Input() currentname='';
  @Input() currentdescription='';
  @Input() currentprice;
  name: string='';
  description: string='';
  price: Number=0;

  @Output() onSubmit = new EventEmitter<Listing>();
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.name=this.currentname;
    this.price=this.currentprice;
    this.description=this.currentdescription;
    
  }
  onButtonClicked():void{
    this.onSubmit.emit(
      {
        id:null,
        name:this.name,
        description:this.description,
        price:Number(this.price),
        views:0,
      }
    );
  }
}
