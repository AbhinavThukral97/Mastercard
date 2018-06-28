import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  price: number=200;
  customers: number=6247;

  constructor(private activeRoute: ActivatedRoute) {
  }

  model: any;

  ngOnInit() { 
    this.model = this.activeRoute.snapshot.queryParams.model;
  }


  mediaClick(){
    this.price+=150;
    this.customers-=0;
  }

  onlineClick(){
    this.price+=80;
    this.customers-=50;
  }

  mobileClick(){
    this.price+=50;
    this.customers-=0;
  }

  offlineClick(){
    this.price+=50;
    this.customers-=1000;
  }

  massMedia = [
  	{
  		name: 'TV',
  		icon: 'tv',
      type: 'fas'
  	},
  	{
  		name: 'Radio',
  		icon: 'broadcast-tower',
      type: 'fas'
  	},
    {
      name: 'Newspaper',
      icon: 'newspaper',
      type: 'fas'
    },
    {
      name: 'Banner',
      icon: 'image',
      type: 'fas'
    },
    {
      name: 'Brochure',
      icon: 'file',
      type: 'fas'
    }
  ];

  online = [
    {
      name: 'Facebook',
      icon: 'facebook-f',
      type: 'fab'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      type: 'fab'
    },
    {
      name: 'Google Ads',
      icon: 'google',
      type: 'fab'
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      type: 'fab'
    },
    {
      name: 'Website',
      icon: 'globe-asia',
      type: 'fas'
    },
    {
      name: 'Email',
      icon: 'link',
      type: 'fas'
    }
  ];

  mobile = [
    {
      name: 'Messaging',
      icon: 'comments',
      type: 'fas'
    },
  ];

  offline = [
    {
      name: 'Direct Mail',
      icon: 'envelope',
      type: 'fas'
    },
    {
      name: 'Coupon',
      icon: 'ticket-alt',
      type: 'fas'
    },
  ];

}
