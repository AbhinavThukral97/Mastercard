import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
  }

  model: any;

  ngOnInit() { 
  	this.model = this.activeRoute.snapshot.queryParams.model;
  }

  algorithms = [
  	{
  		name: 'Random Forests',
  		icon: 'tree',
      params: [
      {
        name: 'Number of trees',
        min: 2,
        max: 100,
        value: 10
      },
      {
        name: 'Max Bins',
        min: 2,
        max: 20,
        value: 10
      },
      {
        name: 'Max Depth',
        min: 10,
        max: 100,
        value: 20
      }
      ]
  	},
  	{
  		name: 'Logistic Regression',
  		icon: 'chart-line',
      params: [
      {
        name: 'Max Iterations',
        min: 1,
        max: 1000,
        value: 100
      },
      {
        name: 'Elastic Net Param',
        min: 2,
        max: 100,
        value: 10
      },
      {
        name: 'Family',
        min: 2,
        max: 100,
        value: 10
      },
      {
        name: 'Reg Param',
        min: 2,
        max: 100,
        value: 10
      }
      ]
  	},
  	{
  		name: 'Neural Network',
  		icon: 'code-branch',
      params: [
      ]
  	},  	
  	{
  		name: 'Gradient Boosting',
  		icon: 'rocket',
      params: [
      ]
  	},
  ];
}
