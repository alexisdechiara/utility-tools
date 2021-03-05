import { Component } from '@angular/core';
import {ManagerService} from './services/manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'utility-tools';

  constructor(private manager: ManagerService){
  }

}
