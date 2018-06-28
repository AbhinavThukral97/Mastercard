import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

	selectedBucket: number=1;
  
  model: any;
  
  constructor(private activeRoute: ActivatedRoute) {
  	this.model = this.activeRoute.snapshot.queryParams.model;
    }

  ngOnInit() {
  }

}
