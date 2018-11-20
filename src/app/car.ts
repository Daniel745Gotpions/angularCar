export class Car {
	id:number;
	name:string;
	subModel:string;
	details:object;
	img:string;

	constructor(id: number,name: string,details:object,img:string,subModel:string ) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.img = img;
        this.subModel = subModel;
    }

}
