import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angle-converter',
  templateUrl: './angle-converter.component.html',
  styleUrls: ['./angle-converter.component.sass']
})
export class AngleConverterComponent implements OnInit {

  valueInput = '';
  unitInput = 'degree';
  unitOutput = 'radian';

  valueOutput(): string {
    const value = this.convertUnit(Number(this.valueInput), this.unitInput, this.unitOutput);
    if (value === 0){
      return '';
    }
    else{
      return value.toLocaleString('fr-FR').toString();    }
  }

  convertUnit(value: number, input: string, output: string): number {
    switch (input) {
      case 'degree':
        switch (output) {
          case 'radian': return value * Math.PI / 180;
          case 'grade' : return value * 200 / 180;
          default: return value;
        }
      case 'radian':
        switch (output) {
          case 'degree' : return value * 180 / Math.PI;
          case 'grade' : return value * 200 / Math.PI;
          default: return value;
        }
      case 'grade':
        switch (output) {
          case 'degree' : return value * 180 / 200;
          case 'radian': return value * Math.PI / 200;
          default: return value;
        }
        default: return 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
