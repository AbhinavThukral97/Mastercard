import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  models = [
  	{
  		title: 'Acquisition',
  		icon: 'flag'
  	},
  	{
  		title: 'Reward',
  		icon: 'award'
  	},
    {
      title: 'Switches',
      icon: 'sync'
    },
    {
      title: 'Heavy Category Shoppers',
      icon: 'shopping-bag'
    },
    {
      title: 'New To Brand',
      icon: 'gift'
    },
    {
      title: 'Line Extension',
      icon: 'chart-bar'
    },
    {
      title: 'Lapsers',
      icon: 'user-secret'
    },
    {
      title: 'Others',
      icon: 'ellipsis-h'
    },
  ];

}
