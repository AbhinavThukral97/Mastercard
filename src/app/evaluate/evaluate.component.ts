import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards = [
  	{
  		name: 'Acquisition Model Campaign',
  		text: 'Targetting customers via TV, Radio, Newspaper, Facebook, Google Ads, Coupons',
  		status: 'running'
  	},
  	{
  		name: 'Reward Campaign',
  		text: '',
  		status: 'Completed'
  	},
  	{
  		name: 'New to Brand Campaign',
  		text: '',
  		status: 'Completed'
  	},
  ];

}
