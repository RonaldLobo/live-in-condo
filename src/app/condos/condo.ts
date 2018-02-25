import { Direccion } from '../shared/direccion';
import { Imagen } from '../shared/imagen';

export class Condo {
	public _id: string = undefined;
	public nombre : string = '';
	public constructora : string = '';
	public descripcion : string = '';
	public telefono : number = 0;
	public correo : string = '';
	public direccion : Direccion;
	public imagen: Imagen[] = [];
	constructor(){
	}
}
