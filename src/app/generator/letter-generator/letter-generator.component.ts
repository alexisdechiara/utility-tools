import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-generator',
  templateUrl: './letter-generator.component.html',
  styleUrls: ['./letter-generator.component.sass']
})
export class LetterGeneratorComponent implements OnInit {

  nb = '1';
  min = '0';
  max = '100';
  type = 'lowerCase';
  output = '';

  generate(): void{
    let letters = '';
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < Number(this.nb); i++) {
      if (this.type === 'lowerCase'){
        letters +=  alpha[Math.floor(Math.random() * alpha.length)].toLowerCase() + ' ';
      } else {
        letters +=  alpha[Math.floor(Math.random() * alpha.length)].toUpperCase() + ' ';
      }
    }
    this.output = letters;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
