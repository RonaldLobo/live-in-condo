import { AreaComun } from '../shared/areaComun';
import { Usuario } from '../shared/usuario';
import { HorarioAreaComun } from '../shared/horarioAreaComun';

export class ReservaAreaComun {
	public _id: string = undefined;
	public horarioAreaComun : HorarioAreaComun;
	public usuario : Usuario;
	public areaComun : AreaComun;
	constructor(){
	}
}
