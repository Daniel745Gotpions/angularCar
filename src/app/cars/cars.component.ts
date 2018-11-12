import { Component, OnInit } from '@angular/core';
import { cars } from '../car-list';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  
  cars = cars;
  constructor() { }
  ngOnInit() {
  	
  }

}
