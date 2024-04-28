import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../../assets/contact-info';
import { NgFor } from '@angular/common';

import ContactInfo from '../../../model/ContactInfo';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public getContactInfo(): ContactInfo {
    return CONTACT_INFO;
  }
}
