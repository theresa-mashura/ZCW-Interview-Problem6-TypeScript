import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeConverterService {

  constructor() { }

  getMilitaryHourNumber(selectedMeridiem: string, selectedHour: number): number {
    let militaryHour: number;
    if (selectedMeridiem === "PM") {
      militaryHour = selectedHour + 12;
    } else if (selectedMeridiem === "AM" && selectedHour === 12) {
      militaryHour = 0;
    } else {
      militaryHour = selectedHour;
    }
    return militaryHour; 
  }

  getNumberAsWord(selectedHour: number): string {
    let militaryHour = selectedHour;

    let hourWord: string;
    if (militaryHour === 0) {
      return hourWord = `${this.wordsSmallNums[militaryHour]}`;
    } else if (militaryHour <= 9) {
      return hourWord = `Zero ${this.wordsSmallNums[militaryHour]}`;
    } else if (militaryHour <= 19) {
      return hourWord = `${this.wordsSmallNums[militaryHour]}`;
    } else {
      let indexTens = ((militaryHour - (militaryHour % 10)) / 10) - 2;
      let indexOnes = (militaryHour % 10);
      return hourWord = `${this.wordsBigNums[indexTens]} ${this.wordsSmallNums[indexOnes]}`;
    }
  }

  wordsSmallNums: string[] = [
    'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 
    'Seventeen', 'Eighteen', 'Nineteen'];
    
  wordsBigNums: string[] = ['Twenty', 'Thirty', 'Fourty', 'Fifty'];

}
