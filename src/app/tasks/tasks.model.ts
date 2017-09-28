/**
 * Created by volkan on 19.09.17.
 */

export class Task {
  private id: number;
  private name: string;
  private progress: number[];

  constructor(id: number, name: string, progress?: number[]){
    this.id = id;
    this.name = name;
    if(progress){
      this.progress = progress;
    } else {
      this.progress = [];
    }
  }

  get taskID() {
    return this.id;
  }

  addProgress(p: number){
    this.progress.push(p);
  }

  getProgress(){
    return this.progress;
  }
}
