import { Component, OnInit } from '@angular/core';
import {ManagerService} from './services/manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'utility-tools';

  tools: any[] | undefined;

  constructor(private manager: ManagerService){
  }

  ngOnInit(): void {
    this.tools = this.manager.tools;
  }


}
