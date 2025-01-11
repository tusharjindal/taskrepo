import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  task : Array<any>;

  constructor(){
    this.task = [];
  }
  makeEntry(NewTask : any) {
    let temp = [];
    //console.log("in service ", NewTask);
    temp.push(NewTask);
    this.task.push(temp);
    console.log("current tasks in system are", NewTask);
  }
}
