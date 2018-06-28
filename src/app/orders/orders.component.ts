import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    }

   model: any;
   price: number;
   customers: number;

  ngOnInit() {
  	this.model = this.activeRoute.snapshot.queryParams.model;
  	this.price = this.activeRoute.snapshot.queryParams.price;
  	this.customers = this.activeRoute.snapshot.queryParams.customers;
  }

}
