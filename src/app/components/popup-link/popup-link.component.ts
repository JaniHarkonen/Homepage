import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-link',
  standalone: true,
  imports: [],
  templateUrl: './popup-link.component.html',
  styleUrl: './popup-link.component.css'
})
export class PopupLinkComponent {
  @Input() href: string = "";
  @Input() target: string = "_blank";
  @Input() caption: string = "";
}
