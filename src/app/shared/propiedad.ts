import { Condo } from '../condos/condo';
import { Imagen } from '../shared/imagen';

export class Propiedad {
	public _id: string = undefined;
	public metros? : number = 0;
	public frente? : number = 0;
	public ancho? : number = 0;
	public precio? : number = 0;
	public descripcion? : string = '';
	public enVenta : boolean = false;
	public condo : Condo;
	public imagen: Imagen[] = [];
	constructor(){
	}
}
