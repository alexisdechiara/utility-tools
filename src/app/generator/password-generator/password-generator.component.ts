import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.sass']
})
export class PasswordGeneratorComponent implements OnInit {

  withLowerCase = true;
  withUpperCase = true;
  withNumber = true;
  withSpecialCharacter = true;
  output = '';
  size = 16;

  constructor() { }

  generate(): void{
    this.output = this.getPassword();
  }

  getRandom(i: number): number{
    return Math.floor(Math.random() * i);
  }

  getPassword(): string {
    const tab = [];
    if (this.withLowerCase) {
      const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      tab.push(letter);
    }
    if (this.withUpperCase) {
      const maj = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      tab.push(maj);
    }
    if (this.withNumber) {
      const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      tab.push(numbers);
    }
    if (this.withSpecialCharacter) {
      const special = ['!', '?', '~', '_', '&', '$', '€', '%', '£', 'µ', '§', '#', '@'];
      tab.push(special);
    }
    let res = '';
    for (let i = 0 ; i < this.size ; i++) {
      const x = this.getRandom(tab.length);
      res += tab[x][this.getRandom(tab[x].length)];
    }
    return res;
  }

  ngOnInit(): void {
  }

}
