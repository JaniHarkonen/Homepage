import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  @Input() indices: any[] = [];
  @Input() selectedIndex: number = 0;
  @Output() selectElement: EventEmitter<number> = new EventEmitter<number>();

  public onSelect(index: number): void {
    this.selectElement.emit(index);
  }

  public onAdvance(advance: number): void {
    this.selectElement.emit(this.selectedIndex + advance);
  }
}
