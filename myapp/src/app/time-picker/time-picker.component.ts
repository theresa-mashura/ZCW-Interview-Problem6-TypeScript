import { Component, OnInit } from '@angular/core';

interface meridiem {
  value: number;
  view: string;
}

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  constructor() { }

  //militaryTime: number;

  ngOnInit(): void {
  }

  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  n: number = 60;
  minutes: number[] = [...Array(this.n).keys()];
  meridiem: meridiem[] = [{value: 1, view: "AM"}, {value: 2, view: "PM"}];

  selectedMeridiem = this.meridiem[0];
  selectedHour = 12;
  selectedMinute = 0;
  
  getBootcampTime(): number {
    let militaryHour: number;
    if (this.selectedMeridiem.value == 2) {
      militaryHour = this.selectedHour + 12;
    } else {
      militaryHour = this.selectedHour
    }
    return militaryHour + this.selectedMinute;
  }
}
