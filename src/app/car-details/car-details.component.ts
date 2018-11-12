import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {cars} from '../car-list';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 

  }
  
  cars = cars;
  chosenCar ;

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
  	for(var i =0 ;i < this.cars.length;i++){
		if( this.cars[i].id == id){
			this.chosenCar = this.cars[i];
		}
	}

  }

}
