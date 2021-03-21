import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-converter',
  templateUrl: './time-converter.component.html',
  styleUrls: ['./time-converter.component.sass']
})
export class TimeConverterComponent implements OnInit {

  valueInput = '';
  unitInput = 'minute';
  unitOutput = 'seconde';

  constructor() { }

  valueOutput(): string {
    const value = (this.fromUnit(this.toUnit(Number(this.valueInput), this.unitInput), this.unitOutput));
    if (value === 0){
      return '';
    }
    else{
      return value.toLocaleString('fr-FR').toString();    }
  }

  toUnit(value: number, unit: string): number{
    switch (unit){
      case 'minute' : return value * 60;
      case 'hour' : return value * 60 * 60;
      case 'day' : return value * 60 * 60 * 24;
      case 'week' : return value * 60 * 60 * 60 * 24 * 7;
      case 'month' : return value * 60 * 60 * 60 * 24 * 30 ;
      case 'year' : return value * 60 * 60 * 60 * 24 * 365;
      case 'century' : return value * 60 * 60 * 60 * 24 * 365 * 100;
      case 'millennium' : return value * 60 * 60 * 60 * 24 * 365 * 1000;
      default: return value;
    }
  }

  fromUnit(value: number, unit: string): number{
    switch (unit){
      case 'minute' : return value / 60;
      case 'hour' : return value / 60 / 60;
      case 'day' : return value / 60 / 60 / 24;
      case 'week' : return value / 60 / 60 / 60 / 24 / 7;
      case 'month' : return value / 60 / 60 / 60 / 24 / 30 ;
      case 'year' : return value / 60 / 60 / 60 / 24 / 365;
      case 'century' : return value / 60 / 60 / 60 / 24 / 365 / 100;
      case 'millennium' : return value / 60 / 60 / 60 / 24 / 365 / 1000;
      default: return value;
    }
  }

  ngOnInit(): void {
  }

}
