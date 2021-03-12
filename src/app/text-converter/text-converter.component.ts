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
    return this.textInput;
    /*const words = this.textInput.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');*/
  }



  constructor() { }

  ngOnInit(): void {
  }

}
