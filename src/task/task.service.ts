import { Injectable } from '@nestjs/common';
let task = [];

@Injectable()
export class TaskService {
  makeEntry(NewTask) {
    console.log(NewTask);
  }
}
