import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();

  onclick() {
    this.btnClick.emit();
  }
}
