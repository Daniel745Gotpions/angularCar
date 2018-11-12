import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent }        from './cars/cars.component';
//import { CarDetailsComponent }  from './car-details/car-details.component';

const routes: Routes = [
	{ path: '', component: CarsComponent },
	{ path: 'car-list', component: CarsComponent },
//	{ path: 'car-details/:id', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})

export class AppRoutingModule { }
