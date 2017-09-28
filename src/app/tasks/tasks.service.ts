import {EventEmitter, Injectable} from '@angular/core';
import {Task} from "./tasks.model";


@Injectable()
export class TasksService {

  id: number = 0;
  subjects: Task[] = [];

  constructor() {}

  /*
  getSubjectById(id: number){
    for(var i = 0; i < this.subjects.length; i++){
      if(this.subjects[i].taskID == id){
        return this.subjects[i];
      }
    }
  }
  */

  getSubjects(){
    return this.subjects;
  }

  pushSub(name: string){
    console.log("pushSub");

    this.subjects.push(new Task(this.id++, name));
    console.log(this.subjects);
  }


  pushProgress(progress: number, id: number){
    console.log("pushProgress");
    console.log("this.subjects.length: " + this.subjects.length);
    for(var i = 0; i < this.subjects.length; i++){
      if(this.subjects[i].taskID == id){

        console.log("Id gefunden: " + i);


        this.subjects[i].addProgress(progress);

      } else {

        console.log("Id nicht gefunden");
      }
    }
  }




}
