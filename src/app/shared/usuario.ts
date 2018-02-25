import { Propiedad } from '../shared/propiedad';

export class Usuario {
	public _id: string = undefined;
	public nombre : string = '';
	public apellido : string = '';
	public apellido2 : string = '';
	public telefono : number = 0;
	public correo : string = '';
	public rol : string = '';
	public tipoLogin : string = '';
	public password : string = '';
	public usuario: string = ''; 
	public propiedades: Propiedad[] = [];
	constructor(){
	}
}
