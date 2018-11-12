import {Car} from './car';

export const cars: Car[] = [
  	new Car(1,'Honda',<JSON>{'year':'2019','engine':'2400','price':'$24,300','rating':'38/28'},'/honda.png','civic'),
	new Car(2,'Mazda',<JSON>{'year':'2013','engine':'1250','price':'$44,150','rating':'32/11'},'/mazda.png','3'),
	new Car(3,'Fiat',<JSON>{'year':'2015','engine':'2400','price':'$60,000','rating':'23/21'},'/fiat.png','X500')
];