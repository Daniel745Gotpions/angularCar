import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {

	constructor(private route:ActivatedRoute,private http:HttpClient) { }

	baseApi:string = "http://127.0.0.1:3000";
 	showSectionEdit:boolean = false;
 	displayTitle:string = 'Show Edit Panel';
  	chosenCar: Array<object> = [];
  	carId:number;
  	updateMessage:string ="";
  	showEditPanel(item){
		this.showSectionEdit = ( !this.showSectionEdit )? true:false;
		this.displayTitle = ( !this.showSectionEdit )? 'Show Edit Panel': 'Hide Edit Panel';
	}
		
	updateDetails(car){
		this.updateMessage ='';
		this.http.get(this.baseApi+"/update", {
		      params: {
		      	id:car[0].id,
		      	year:car[0].details.year,
		      	engine:car[0].details.engine,
		      	price:car[0].details.price,
		      	rating:car[0].details.rating,
		      },
		      observe: 'response'
		    })
		    .toPromise()
		    .then(response => {
		    	
		      	this.updateMessage = response.body.message;

		    })
		    .catch(console.log); 
	}

  	ngOnInit() {
  		// Get spesific car
  		let id = parseInt(this.route.snapshot.paramMap.get('id'));
  		this.carId = id;
		this.http.get(this.baseApi+'/car-details/'+id).subscribe((res)=>{
			
			if( typeof res[0] != 'undefined' ){
				res[0].details = JSON.parse(res[0].details);

				this.chosenCar.push(res[0]) ;
			}
	    });
  	}

}
