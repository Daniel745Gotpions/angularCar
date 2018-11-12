import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent }        from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
	{ path: '',   redirectTo: '/car-list', pathMatch: 'full' },
	{ path: 'car-details/:id', component: CarDetailsComponent },
	{ path: 'car-list', component: CarsComponent },
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})

export class AppRoutingModule { }
