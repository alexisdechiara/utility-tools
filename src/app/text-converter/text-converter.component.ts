import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.sass']
})
export class TextConverterComponent implements OnInit {

  textInput = '';

  convertToLowerCase(): string {
    return this.textInput.toLowerCase();
  }

  convertToUpperCase(): string {
    return this.textInput.toUpperCase();
  }

  convertToSentenceCase(): string {
    return this.textInput.charAt(0).toUpperCase() + this.textInput.slice(1);
  }

  convertToTitleCase(): string{
    const titleCase = this.textInput.toLowerCase().split(' ');
    for (let i = 0; i < titleCase.length; i++) {
      titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);
    }
    return titleCase.join(' ');
  }

  convertToInvert(): string{
    let s = '';
    let i = 0;
    while (i < this.textInput.length) {
      let n = this.textInput.charAt(i);
      if (n === n.toUpperCase()) {
        n = n.toLowerCase();
      } else {
        n = n.toUpperCase();
      }
      i += 1;
      s += n;
    }
    return s;
  }

  convertToReverse(): string {
    const reverseKey = new Map([
      ['a', 'ɐ'],
      ['b', 'q'],
      ['c', 'ɔ'],
      ['d', 'p'],
      ['e', 'ǝ'],
      ['f', 'ɟ'],
      ['g', 'ƃ'],
      ['h', 'ɥ'],
      ['i', 'ᴉ'],
      ['j', 'ɾ'],
      ['k', 'ʞ'],
      ['l', 'l'],
      ['m', 'ɯ'],
      ['n', 'u'],
      ['o', 'o'],
      ['p', 'd'],
      ['q', 'b'],
      ['r', 'ɹ'],
      ['s', 's'],
      ['t', 'ʇ'],
      ['u', 'n'],
      ['v', 'ʌ'],
      ['w', 'ʍ'],
      ['x', 'x'],
      ['y', 'ʎ'],
      ['z', 'z'],
      ['A', 'Ɐ'],
      ['B', 'Q'],
      ['C', 'Ɔ'],
      ['D', 'P'],
      ['E', 'Ǝ'],
      ['F', 'ɟ'],
      ['G', 'Ƃ'],
      ['H', 'Ɥ'],
      ['I', 'ᴉ'],
      ['J', 'ɾ'],
      ['K', 'Ʞ'],
      ['L', 'L'],
      ['M', 'Ɯ'],
      ['N', 'U'],
      ['O', 'O'],
      ['P', 'D'],
      ['Q', 'B'],
      ['R', 'ɹ'],
      ['S', 'S'],
      ['T', 'Ʇ'],
      ['U', 'N'],
      ['V', 'Ʌ'],
      ['W', 'ʍ'],
      ['X', 'X'],
      ['Y', 'ʎ'],
      ['Z', 'Z'],
      [' ', ' ']
    ]);
    let reverse = '';
    for (let i = this.textInput.length - 1; i >= 0; i--) {
      reverse += reverseKey.get(this.textInput[i]);
    }
    return reverse;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
