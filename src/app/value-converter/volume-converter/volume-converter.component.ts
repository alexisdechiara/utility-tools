import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume-converter',
  templateUrl: './volume-converter.component.html',
  styleUrls: ['./volume-converter.component.sass']
})
export class VolumeConverterComponent implements OnInit {

  valueInput = '';
  prefixInput = '';
  metricInput = 'liter';
  prefixOutput = '';
  metricOutput = 'liter';

  valueOutput(): string {
    const value = (this.fromUnit(this.toUnit(Number(this.valueInput), this.prefixInput), this.prefixOutput));
    if (value === 0){
      return '';
    }
    else{
      return value.toString();
    }
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

  constructor() { }

  ngOnInit(): void {
  }

}
