import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from "../../tasks.service";


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],

})
export class ProgressComponent implements OnInit {

  @Input() progr: number;
  color: number;

  constructor() {

  }

  ngOnInit() {
      if(this.progr < 50){
          this.color = -1;
      } else if (this.progr < 75 && this.progr >= 50){
          this.color = 0;
      } else if (this.progr >= 75){
          this.color = 1;
      } else if (this.progr > 100){
          this.progr = 100;
          this.color = 1;
      }
  }



}
