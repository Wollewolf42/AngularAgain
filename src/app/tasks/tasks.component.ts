import { Component, OnInit } from '@angular/core';
import {TasksService} from "./tasks.service";
import {Task} from "./tasks.model";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {

  id: number = 0;
  subjects: Task[];

  constructor(private tasksService: TasksService) {

  }


  onPushSub(name: string){
    this.tasksService.pushSub(name);
  }

  onPushProgress(progress: number){

  }


  ngOnInit() {
    this.subjects = this.tasksService.getSubjects();
  }

}
