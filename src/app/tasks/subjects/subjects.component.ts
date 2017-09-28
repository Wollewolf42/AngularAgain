import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from "../tasks.service";
import {Task} from "../tasks.model";



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [TasksService],
})
export class SubjectsComponent implements OnInit {

  @Input() subject: Task;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    //this.subject = this.tasksService.getSubjectById(this.subject.id);
  }

  onPushProgress(progress: number){

    console.log("progess: "+progress);
    console.log("single subject id: " + this.subject.taskID);
    this.tasksService.pushProgress(progress, this.subject.taskID);

  }



}
