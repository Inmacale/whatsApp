import { Contacto } from "./contacto";
import { Mensaje } from "./mensaje";

export interface Chat {
    id: number,
    contacto: Contacto;
    mensajes: Mensaje[];
    mensajesNoLeidos: Mensaje[];

}