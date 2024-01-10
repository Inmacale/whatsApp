import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../contacto.service';
import { MensajeService } from '../mensaje.service';
import { Mensaje } from '../mensaje';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  nombreContacto: string = '';
  newmensaje: string = '';
  mensajes: Mensaje[] = [];

  constructor(private activatedRoute: ActivatedRoute, private contactoService: ContactoService, private mensajeService: MensajeService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      const contacto = this.contactoService.getContactoById(parseInt(id, 10));
      if (contacto) {
        this.nombreContacto = contacto.name;
      }
    });
  }

  getMensajes(): void {
    this.mensajes = this.mensajeService.getMensajes().filter((mensaje) => mensaje.remitente === this.nombreContacto);

  }

  sendMensaje(): void {

    if (this.newmensaje.trim() !== '') {
      this.mensajeService.sendMensaje(this.newmensaje, this.nombreContacto, true);
      this.newmensaje = '';
      this.getMensajes();
    }
  }
}



