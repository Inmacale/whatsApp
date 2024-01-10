import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  nombreContacto: string = '';

  constructor(private activatedRoute: ActivatedRoute, private contactoService: ContactoService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      const contacto = this.contactoService.getContactoById(parseInt(id, 10));
      if (contacto) {
        this.nombreContacto = contacto.name;
      }
    });
  }
}



