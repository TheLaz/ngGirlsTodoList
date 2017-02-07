import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]="title"
          (keyup.enter)="changeTitle($event.target.value)"
          #myInput
    />
    <button (click)="changeTitle(myInput.value)">Save</button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit:EventEmitter<string> = new EventEmitter();
  @Output() remove:EventEmitter<any> = new EventEmitter();

  private title: string = 'My First Todo Title !!!';
  
  constructor() {
    
  }

  ngOnInit() {

  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
