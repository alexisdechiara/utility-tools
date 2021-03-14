import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-generator',
  templateUrl: './item-generator.component.html',
  styleUrls: ['./item-generator.component.sass']
})
export class ItemGeneratorComponent implements OnInit {

  nb = '1';
  item = '';
  output = '';

  generate(): void{
    this.output = this.getItems();
  }

  getRandom(i: number): number{
    return Math.floor(Math.random() * i);
  }

  getItems(): string{
    let res = '';
    const items = this.item.split(';');
    for (let i = 0 ; i < Number(this.nb) ; i++) {
      const x = this.getRandom(items.length);
      res += items[x] + ' ';
    }
    return res;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
