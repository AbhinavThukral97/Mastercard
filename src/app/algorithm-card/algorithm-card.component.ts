import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algorithm-card',
  templateUrl: './algorithm-card.component.html',
  styleUrls: ['./algorithm-card.component.scss']
})
export class AlgorithmCardComponent implements OnInit {

  @Input() algo: any;

  status: boolean=false;
  popup: boolean=false;

  constructor() {
  }

  clickCard() {
  	this.status = !this.status;
  }

  openPopUp() {
    if(this.popup)
      return "scale(1)";
    else
      return "scale(0)";
  }

  ngOnInit() {
  }
}
