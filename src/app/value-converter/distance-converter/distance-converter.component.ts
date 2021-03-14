import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance-converter',
  templateUrl: './distance-converter.component.html',
  styleUrls: ['./distance-converter.component.sass']
})
export class DistanceConverterComponent implements OnInit {

  valueInput = '';
  prefixInput = '';
  unitInput = 'meter';
  prefixOutput = '';
  unitOutput = 'meter';

  valueOutput(): string {
    const value = (this.fromUnit(this.toUnit(Number(this.valueInput), this.prefixInput), this.prefixOutput));
    if (value === 0){
      return '';
    }
    else{
      return value.toLocaleString('fr-FR').toString();
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