export class Car {
	id:number;
	name:string;
	details:JSON;
	img:string;

	constructor(id: number,name: string,details:JSON,img:string ) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.img = img;
    }

}
