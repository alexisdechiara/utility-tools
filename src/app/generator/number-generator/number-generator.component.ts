import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.sass']
})
export class NumberGeneratorComponent implements OnInit {

  nb = '1';
  min = '0';
  max = '100';
  type = 'integer';
  output = '';

  constructor() { }

  generate(): void{
    let numbers = '';
    if (this.type === 'integer'){
      for (let i = 0; i < Number(this.nb); i++) {
        numbers += (Math.floor(Math.random() * (Number(this.max) - Number(this.min) + 1)) + Number(this.min)).toString() + ' ';
      }
    } else {
      for (let i = 0; i < Number(this.nb); i++) {
        numbers += (Math.random() * (Number(this.max) - Number(this.min)) + Number(this.min)).toString() + ' ';
      }
    }
    this.output = numbers;
  }

  ngOnInit(): void {
  }

}
