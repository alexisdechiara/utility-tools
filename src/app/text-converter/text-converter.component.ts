import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-converter',
  templateUrl: './text-converter.component.html',
  styleUrls: ['./text-converter.component.sass']
})
export class TextConverterComponent implements OnInit {

  textInput = '';
  /*
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
    ['z', 'z']
  ]);*/

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
    return this.textInput;
    /*const words = this.textInput.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');*/
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

  /*
  convertToReverse(): string {
    let reverse = this.textInput;
    for (let i = 0; i < this.textInput.length; i++) {
      reverse.charAt(reverse.length-1) = this.reverseKey.get(reverse.charAt(i));
    }
  }*/



  constructor() { }

  ngOnInit(): void {
  }

}
