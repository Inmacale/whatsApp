import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  contactos: Contacto[] = [];
  totalContactos: number = 0;
  contactosPerPage: number = 5; // Cantidad de contactos por página

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactos = this.contactoService.getContactos();
    this.totalContactos = this.contactos.length;
  }

  onIonInfinite(event: any): void {
    setTimeout(() => {
      const startIndex = this.contactos.length;
      const endIndex = startIndex + this.contactosPerPage;
      const newContactos = this.contactoService.getContactos().slice(startIndex, endIndex);

      this.contactos = [...this.contactos, ...newContactos];

      event.target.complete();

      if (this.contactos.length >= this.totalContactos) {
        event.target.disabled = true;
      }
    }, 2000);
  }
}
