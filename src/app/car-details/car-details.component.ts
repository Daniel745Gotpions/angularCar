import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private router:Router) { 
		debugger;
  }
  


  ngOnInit() {
  	debugger
  	let id = parseInt(this.router);
  }

}
