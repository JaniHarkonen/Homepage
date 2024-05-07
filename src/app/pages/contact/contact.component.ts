import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../../assets/contact-info';
import { NgFor } from '@angular/common';

import ContactInfo from '../../../model/ContactInfo';
import { PopupLinkComponent } from '../../components/popup-link/popup-link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, PopupLinkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public getContactInfo(): ContactInfo {
    return CONTACT_INFO;
  }
}
