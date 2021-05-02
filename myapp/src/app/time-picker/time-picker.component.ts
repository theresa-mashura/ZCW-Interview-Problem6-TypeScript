import { Component, OnInit } from '@angular/core';
import { TimeConverterService } from '../time-converter.service';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  constructor(private timeConverterService: TimeConverterService) { }

  bootcampTime = '';

  ngOnInit(): void {
  }

  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  n: number = 60;
  minutes: number[] = [...Array(this.n).keys()];
  meridiem: string[] = ["AM", "PM"];

  selectedMeridiem = "AM";
  selectedHour = 12;
  selectedMinute = 0;
  
  getBootcampTime(): void {
    let hourNumber = this.timeConverterService.getMilitaryHourNumber(this.selectedMeridiem, this.selectedHour);
    let hourWord = this.timeConverterService.getNumberAsWord(hourNumber); 
    let minuteWord = this.timeConverterService.getNumberAsWord(this.selectedMinute); 
    this.bootcampTime = `${hourWord} Hundred and ${minuteWord} Hours`;
  }

}
