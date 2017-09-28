import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SubjectsComponent } from './tasks/subjects/subjects.component';
import { ProgressComponent } from './tasks/subjects/progress/progress.component';
import {TasksService} from "./tasks/tasks.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SubjectsComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
