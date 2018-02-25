import { Condo } from '../condos/condo';
import { Usuario } from '../shared/usuario';
import { Gasto } from '../shared/gasto';
import { Propiedad } from '../shared/propiedad';

export class Factura {
	public _id: string = undefined;
	public consecutivo : number = 0;
	public descripcion : string = '';
	public titulo : string = '';
	public fechaGenerada : Date;
	public fechaVencimiento : Date;
	public condo : Condo;
	public usuario : Usuario;
	public propiedad : Propiedad;
	public pagada : boolean = false;
	public gastos : Gasto[];
	constructor(){
	}
}
