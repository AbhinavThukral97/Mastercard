import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-target-card',
  templateUrl: './target-card.component.html',
  styleUrls: ['./target-card.component.scss']
})
export class TargetCardComponent implements OnInit {

	@Input() mode: any;

  status: boolean=false;

  constructor() { }

  clickCard() {
  	this.status = !this.status;
  }

  ngOnInit() {
  }

}
