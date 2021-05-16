import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-generator',
  templateUrl: './time-generator.component.html',
  styleUrls: ['./time-generator.component.sass']
})
export class TimeGeneratorComponent implements OnInit {

  second = false;
  minute = false;
  hour = false;
  day = true;
  month = true;
  year = true;
  output = '';

  constructor() { }

  public generate(): void {
    const date = new Date(this.random( 0, 3000), this.random(0, 11), this.random(0, 31), this.random(0, 24), this.random(0, 60), this.random(0, 60));
    const options = {};
    if (this.second){
      Object.assign(options, {second: '2-digit'});
    }
    if (this.minute){
      Object.assign(options, {minute: '2-digit'});
    }
    if (this.hour){
      Object.assign(options, {hour: '2-digit'});
    }
    if (this.day){
      Object.assign(options, {day: '2-digit'});
    }
    if (this.month){
      Object.assign(options, {month: 'long'});
    }
    if (this.year){
      Object.assign(options, {year: 'numeric'});
    }
    console.log(options);
    this.output = date.toLocaleDateString('fr-FR', options);
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void {
  }

}
