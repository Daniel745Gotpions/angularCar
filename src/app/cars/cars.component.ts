import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  
  cars = [];
  baseApi:string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
  	// On load call to node
  	this.http.get(this.baseApi+'/get-cars').subscribe((res)=>{
  		res = <Object>res; 
      if( res.status ){
  			this.cars = res.returnData;
  		}
  	});	
  }

}
