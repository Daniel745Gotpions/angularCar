import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {

  constructor() { }
  
  news = [
  	{
  		id:1,
  		title:"Autocar confidential: Mercedes boss welcomes new challenges, Dacia won't build a large SUV and more",
  		miniTitle:"Our reporters empty their notebooks to round up this week's..",
  		body:"Our reporters empty their notebooks to round up this week's gossip from across the automotive industry",
  		imgSrc:'./assets/img/newsImages/news1.jpg',
  		showAll:false

  	},
  	{	
  		id:2,
  		title:"James Ruppert: a modest investment can reap rewards",
  		miniTitle:"£500 could go a lot further than you think..",
  		body:"£500 could go a lot further than you think in the used car market 20 November 2018",
  		imgSrc:'../assets/img/newsImages/news2.jpg',
  		showAll:false
  	},
  	{
  		id:3,
  		title:"Nissan to oust boss Carlos Ghosn due to 'serious misconduct'",
  		miniTitle:"Nissan's long-time chairman is arrested..",
  		body:"Nissan's long-time chairman is arrested in Japan over claims he under-reported his salary",
  		imgSrc:'../assets/img/newsImages/news3.png',
  		showAll:false
  	}
  ];
  showAllNews(item){
  	item.showAll = (!item.showAll)? true:false ; 
  }
  
  ngOnInit() {
  }

}
