import { Contacto } from "./contacto";
import { Mensaje } from "./mensaje";

export interface Chat{
    contacto: Contacto;
    mensajes: Mensaje[];
    mensajesNoLeidos: Mensaje[];

}