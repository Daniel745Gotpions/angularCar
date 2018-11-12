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
 	showSectionEdit:boolean = false;
 	displayTitle:string = 'Show Edit Panel';
  	chosenCar;

  	showEditPanel(item){
		this.showSectionEdit = ( !this.showSectionEdit )? true:false;
		this.displayTitle = ( !this.showSectionEdit )? 'Show Edit Panel': 'Hide Edit Panel';
	}

  	ngOnInit() {
  		
	  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
	  	for(var i =0 ;i < this.cars.length;i++){
			if( this.cars[i].id == id){
				this.chosenCar = this.cars[i];
			}
		}
	


  	}

}
