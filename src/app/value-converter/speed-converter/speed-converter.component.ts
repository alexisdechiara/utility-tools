import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speed-converter',
  templateUrl: './speed-converter.component.html',
  styleUrls: ['./speed-converter.component.sass']
})
export class SpeedConverterComponent implements OnInit {

  valueInput = '';
  prefixInput = '';
  unitInput = '';
  timeInput = '';
  prefixOutput = '';
  unitOutput = '';
  timeOutput = '';

  constructor() { }

  valueOutput(): string {
    const time = (this.fromTime(this.toTime(Number(this.valueInput), this.prefixInput), this.prefixOutput));
    const distance = (this.fromUnit(this.toUnit(Number(this.valueInput), this.prefixInput), this.prefixOutput));
    const value = time / distance;
    if (value === 0){
      return '';
    }
    else{
      return value.toLocaleString('fr-FR').toString();    }
  }

  toUnit(value: number, prefix: string): number{
    switch (prefix){
      case 'kilo' : return value * 1000;
      case 'hecto' : return value * 100;
      case 'deca' : return value * 10;
      case 'deci' : return value / 10;
      case 'centi' : return value / 100;
      case 'milli' : return value / 1000;
      default: return value;
    }
  }

  fromUnit(value: number, prefix: string): number{
    switch (prefix){
      case 'kilo' : return value / 1000;
      case 'hecto' : return value / 100;
      case 'deca' : return value / 10;
      case 'deci' : return value * 10;
      case 'centi' : return value * 100;
      case 'milli' : return value * 1000;
      default: return value;
    }
  }

  toTime(value: number, time: string): number{
    switch (time){
      case 'minute' : return value * 60;
      case 'hour' : return value * 60 * 60;
      case 'day' : return value * 60 * 60 * 24;
      default: return value;
    }
  }

  fromTime(value: number, time: string): number{
    switch (time){
      case 'minute' : return value / 60;
      case 'hour' : return value / 60 / 60;
      case 'day' : return value / 60 / 60 / 24;
      default: return value;
    }
  }

  ngOnInit(): void {
  }

}
