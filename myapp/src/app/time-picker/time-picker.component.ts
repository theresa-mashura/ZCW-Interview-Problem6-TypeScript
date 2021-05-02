import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  n: number = 60;
  minutes: number[] = [...Array(this.n).keys()];


}
