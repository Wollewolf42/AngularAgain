import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../tasks.model";



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [],
})
export class SubjectsComponent implements OnInit {

  @Input() subject: Task;
  color: number = this.tasksService.color;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {

    //this.subject = this.tasksService.getSubjectById(this.subject.id);
  }

  onPushProgress(progress: number){
    console.log("progess: "+progress);
    console.log("single subject id: " + this.subject.taskID);
    //not more progress than 100%
    if(progress > 100){
        this.tasksService.pushProgress(100, this.subject.taskID);
    } else {
        this.tasksService.pushProgress(progress, this.subject.taskID);
    }
  }


}
