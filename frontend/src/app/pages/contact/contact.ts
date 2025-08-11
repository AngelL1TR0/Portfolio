import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  name = '';
  email = '';
  message = '';

  sendEmail() {
    const subject = encodeURIComponent('Contacto desde portfolio');
    const body = encodeURIComponent(`Nombre: ${this.name}\nEmail: ${this.email}\nMensaje: ${this.message}`);
    window.location.href = `mailto:angel@portfolio.com?subject=${subject}&body=${body}`;
  }
}
