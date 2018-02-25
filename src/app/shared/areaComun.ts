import { Condo } from '../condos/condo';
import { HorarioAreaComun } from '../shared/horarioAreaComun';

export class AreaComun {
	public _id: string = undefined;
	public descripcion : string = '';
	public reglamento : string = '';
	public horario : HorarioAreaComun[] = [];
	public condo : Condo;
	constructor(){
	}
}
